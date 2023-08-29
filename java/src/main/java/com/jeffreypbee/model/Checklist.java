package com.jeffreypbee.model;

import java.util.Objects;

public class Checklist {

    private int id;
    private int userId;
    private String name;
    private String description;
    private String iconName;
    private String color;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIconName() {
        return iconName;
    }

    public void setIconName(String iconName) {
        this.iconName = iconName;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Checklist checklist = (Checklist) o;
        return id == checklist.id && userId == checklist.userId && Objects.equals(name, checklist.name) && Objects.equals(description, checklist.description) && Objects.equals(iconName, checklist.iconName) && Objects.equals(color, checklist.color);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, name, description, iconName, color);
    }
}
