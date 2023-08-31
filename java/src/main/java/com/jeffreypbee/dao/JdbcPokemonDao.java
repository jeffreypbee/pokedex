package com.jeffreypbee.dao;

import com.jeffreypbee.model.Pokemon;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcPokemonDao implements PokemonDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcPokemonDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Pokemon> getAllPokemon() {
        List<Pokemon> pkmnList = new ArrayList<Pokemon>();
        String sql = "SELECT id, pokedex_number, name, type1, type2 FROM pokemon ORDER BY pokedex_number";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql);
        while (result.next()) {
            pkmnList.add(mapRowSetToPokemon(result));
        }
        return pkmnList;
    }

    @Override
    public Pokemon getPokemonById(int id) {
        Pokemon pkmn = new Pokemon();
        String sql = "SELECT id, pokedex_number, name, type1, type2 FROM pokemon WHERE id = ?";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, id);
        if (result.next()) {
            pkmn = mapRowSetToPokemon(result);
        }
        return pkmn;
    }

    @Override
    public List<Pokemon> getPokemonInChecklist(int checklistId) {
        List<Pokemon> list = new ArrayList<Pokemon>();
        String sql = "SELECT id, pokedex_number, name, type1, type2 FROM pokemon WHERE id IN " +
                "(SELECT pokemon_id FROM pokemon_in_checklists WHERE checklist_id = ?)";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, checklistId);
        while (result.next()) {
            list.add(mapRowSetToPokemon(result));
        }
        return list;
    }

    @Override
    public Pokemon addPokemon(Pokemon pokemon) {
        String sql = "INSERT INTO pokemon (id, pokedex_number, name, type1, type2) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, pokemon.getId(), pokemon.getPokedexNumber(), pokemon.getName(), pokemon.getType1(), pokemon.getType2());
        return getPokemonById(pokemon.getId());
    }

    private Pokemon mapRowSetToPokemon(SqlRowSet row) {
        Pokemon pkmn = new Pokemon();
        pkmn.setId(row.getInt("id"));
        pkmn.setPokedexNumber(row.getInt("pokedex_number"));
        pkmn.setName(row.getString("name"));
        if (row.getString("type1") != null) {
            pkmn.setType1(row.getString("type1"));
        }
        if (row.getString("type2") != null) {
            pkmn.setType2(row.getString("type2"));
        }
        return pkmn;
    }

}
