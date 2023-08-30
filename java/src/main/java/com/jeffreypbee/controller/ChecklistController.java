package com.jeffreypbee.controller;

import com.jeffreypbee.dao.ChecklistDao;
import com.jeffreypbee.model.Checklist;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ChecklistController {

    private ChecklistDao checklistDao;

    public ChecklistController(ChecklistDao checklistDao) { this.checklistDao = checklistDao; }

    @GetMapping(path="/users/{id}/checklists")
    public List<Checklist> getAllForUser(@PathVariable int id) {
        return checklistDao.getAllChecklistsForUser(id);
    }

    @GetMapping(path="/checklists/{id}")
    public Checklist getById(@PathVariable int id) {
        return checklistDao.getChecklistById(id);
    }

}
