package de.springreact.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AboutAPI {

    @RequestMapping (path = "/api/about", produces = {"text/plain"})
    public String getContent () {

        return "About";
    }
}
