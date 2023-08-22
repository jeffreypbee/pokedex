package com.jeffreypbee.dao;

import com.jeffreypbee.model.Pokemon;

import java.util.List;

public interface PokemonDao {

    List<Pokemon> getAllPokemon();

    Pokemon getPokemonById(int id);

    Pokemon addPokemon(Pokemon pokemon);

}
