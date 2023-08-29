package com.jeffreypbee.dao;

import com.jeffreypbee.model.Checklist;

import java.util.List;

public interface ChecklistDao {

    List<Checklist> getAllChecklistsForUser(int userId);

    Checklist getChecklistById(int id);

}
