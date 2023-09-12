package com.jeffreypbee.dao;

import com.jeffreypbee.model.Checklist;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;

public class JdbcChecklistDaoTests extends BaseDaoTests {

    private JdbcChecklistDao target;

    @Before
    public void setup() {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        target = new JdbcChecklistDao(jdbcTemplate, new JdbcPokemonDao(jdbcTemplate));
    }

    @Test
    public void get_all_checklists_for_user_works() {
        List<Checklist> list = target.getAllChecklistsForUser(1);

        Assert.assertEquals(1, list.size());
    }

    @Test
    public void get_checklist_by_id_returns_correct_checklist() {
        Checklist correct = new Checklist();
        correct.setId(1);
        correct.setUserId(1);
        correct.setName("Checklist");
        correct.setIconName("gem");
        correct.setColor("00dd00");

        Checklist returned = target.getChecklistById(1);

        Assert.assertEquals(correct, returned);
    }

    @Test
    public void add_checklist_works() {
        Checklist newChecklist = new Checklist();
        newChecklist.setUserId(1);
        newChecklist.setName("New");
        newChecklist.setIconName("gem");
        newChecklist.setColor("000000");

        Checklist returned = target.addChecklist(newChecklist);
        newChecklist.setId(returned.getId());

        Assert.assertEquals(newChecklist, returned);
    }

}
