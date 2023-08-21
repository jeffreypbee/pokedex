package com.jeffreypbee.dao;

import com.jeffreypbee.model.Pokemon;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class JdbcPokemonDaoTests extends BaseDaoTests {

    private JdbcPokemonDao target;

    @Before
    public void setup() {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        target = new JdbcPokemonDao(jdbcTemplate);
    }

    @Test
    public void get_by_id_gets_correct_pokemon_by_id() {
        Pokemon pkmn = new Pokemon();
        pkmn.setId(1);
        pkmn.setPokedexNumber(1);
        pkmn.setName("Bulbasaur");
        pkmn.setType1("grass");
        pkmn.setType2("poison");

        Pokemon newPkmn = target.getPokemonById(1);

        Assert.assertEquals(pkmn, newPkmn);
    }

    @Test
    public void get_all_pokemon_gets_all_pokemon() {
        List<Pokemon> pkmnList = target.getAllPokemon();

        Assert.assertEquals(3, pkmnList.size());
    }

}
