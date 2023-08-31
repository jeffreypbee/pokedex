package com.jeffreypbee.dao;

import com.jeffreypbee.model.Checklist;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcChecklistDao implements ChecklistDao {

    private final JdbcTemplate jdbcTemplate;
    private PokemonDao pokemonDao;

    public JdbcChecklistDao(JdbcTemplate jdbcTemplate, PokemonDao pokemonDao) {
        this.jdbcTemplate = jdbcTemplate;
        this.pokemonDao = pokemonDao;
    }

    @Override
    public List<Checklist> getAllChecklistsForUser(int userId) {
        List<Checklist> checklists = new ArrayList<Checklist>();
        String sql = "SELECT checklist_id, user_id, name, description, icon_name, color FROM checklists WHERE user_id = ?";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, userId);
        while (result.next()) {
            checklists.add(mapRowToChecklist(result));
        }
        return checklists;
    }

    @Override
    public Checklist getChecklistById(int id) {
        Checklist checklist = new Checklist();
        String sql = "SELECT checklist_id, user_id, name, description, icon_name, color FROM checklists WHERE checklist_id = ?";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, id);
        if (result.next()) {
            checklist = mapRowToChecklist(result);
        }
        return checklist;
    }

    private Checklist mapRowToChecklist(SqlRowSet row) {
        Checklist checklist = new Checklist();
        checklist.setId(row.getInt("checklist_id"));
        checklist.setUserId(row.getInt("user_id"));
        checklist.setName(row.getString("name"));
        checklist.setDescription(row.getString("description"));
        checklist.setIconName(row.getString("icon_name"));
        checklist.setColor(row.getString("color"));
        checklist.setPokemon(pokemonDao.getPokemonInChecklist(checklist.getId()));
        return checklist;
    }
}
