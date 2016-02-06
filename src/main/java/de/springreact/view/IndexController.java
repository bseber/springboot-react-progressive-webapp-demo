package de.springreact.view;

import de.springreact.react.React;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
public class IndexController {

    private final React react;

    @Autowired
    public IndexController (React react) {
        this.react = react;
    }

    @RequestMapping ("/")
    public String renderIndex (Model model) {

        final Map<String, String> initialState = getAppState ();

        model.addAttribute ("content", react.render (initialState));

        return "index";
    }

    private Map<String, String> getAppState () {

        final Map<String, String> state = new HashMap<> ();

               state.put ("location", "/");
               state.put ("content", "Index");
        return state;
    }
}
