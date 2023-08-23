package com.jeffreypbee.controller;

import com.jeffreypbee.dao.PokemonDao;
import com.jeffreypbee.model.Pokemon;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/pokemon")
@CrossOrigin
public class PokemonController {

    private PokemonDao pokemonDao;

    public PokemonController(PokemonDao pokemonDao) {
        this.pokemonDao = pokemonDao;
    }

    @GetMapping(path="")
    public List<Pokemon> getAll() {
       return pokemonDao.getAllPokemon();
    }

    @GetMapping(path="/{id}")
    public Pokemon getById(@PathVariable int id) {
        Pokemon pkmn = pokemonDao.getPokemonById(id);
        if (pkmn.getName() == null) {
            //TODO: Get the Pokemon from the API and insert it
            // pkmn = pokemonDao.addPokemon(getPokemonByIdFromAPI(id));
        }
        return pkmn;
    }

    private Pokemon getPokemonByIdFromAPI(int id) {
        Pokemon pkmn = new Pokemon();
        return pkmn;
    }

}
