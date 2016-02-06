package de.springreact.view;

import de.springreact.react.React;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
public class AboutController {

    private final React react;

    @Autowired
    public AboutController (React react) {
        this.react = react;
    }

    @RequestMapping ("/about")
    public String renderAbout (Model model) {

        final Map<String, String> initialState = getAppState ();

        model.addAttribute ("content", react.render (initialState));

        return "index";
    }

    private Map<String, String> getAppState () {

        final Map<String, String> state = new HashMap<> ();

               state.put ("location", "/about");
               state.put ("content", "About");
        return state;
    }
}
