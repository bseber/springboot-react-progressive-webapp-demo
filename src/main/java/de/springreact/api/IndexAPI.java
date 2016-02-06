package de.springreact.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexAPI {

    @RequestMapping (path = "/api/index", produces = {"text/plain"})
    public String getContent () {

        return "Index";
    }
}
