package de.springreact.view;

import de.springreact.api.AboutAPI;
import de.springreact.react.React;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
public class AboutController {

    private final AboutAPI api;
    private final React react;

    @Autowired
    public AboutController (AboutAPI api, React react) {
        this.api = api;
        this.react = react;
    }

    @RequestMapping ("/about")
    public String renderAbout (Model model) {

        final Map<String, String> initialState = getAppState ();

        model.addAttribute ("content", react.render (initialState));
        model.addAttribute ("initialState",          initialState);

        return "index";
    }

    private Map<String, String> getAppState () {

        final Map<String, String> state = new HashMap<> ();

               state.put ("location", "/about");
               state.put ("content", api.getContent ());
        return state;
    }
}
