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
        return pokemonDao.getPokemonById(id);
    }

}
