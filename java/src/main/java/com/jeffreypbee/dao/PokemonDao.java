package com.jeffreypbee.dao;

import com.jeffreypbee.model.Pokemon;

import java.util.List;

public interface PokemonDao {

    List<Pokemon> getAllPokemon();

    Pokemon getPokemonById(int id);

    List<Pokemon> getPokemonInChecklist(int checklistId);

    Pokemon addPokemon(Pokemon pokemon);

}
