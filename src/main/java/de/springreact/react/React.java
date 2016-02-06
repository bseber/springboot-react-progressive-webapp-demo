package de.springreact.react;

import jdk.nashorn.api.scripting.NashornScriptEngine;
import org.springframework.stereotype.Component;

import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Map;

@Component
public class React {

    private ThreadLocal<NashornScriptEngine> engineHolder = new ThreadLocal<NashornScriptEngine> () {

        @Override
        protected NashornScriptEngine initialValue() {

            NashornScriptEngine nashornScriptEngine = (NashornScriptEngine) new ScriptEngineManager ().getEngineByName ("nashorn");

            try {
                nashornScriptEngine.eval (read ("static/vendor/react.js"));
                nashornScriptEngine.eval (read ("static/vendor/react-dom-server.js"));
                nashornScriptEngine.eval (read ("static/js/main.js"));
            }
            catch (ScriptException e) {
                throw new RuntimeException(e);
            }

            return nashornScriptEngine;
        }
    };

    public String render (Map<String, String> state) {

        try {
            Object                 html = engineHolder.get ().invokeFunction ("renderServer", state);
            return String.valueOf (html);
        }
        catch (Exception e) {
            throw new IllegalStateException ("failed to render react component", e);
        }
    }

    private Reader read (String path) {

        InputStream in = getClass ().getClassLoader ().getResourceAsStream (path);

        return new InputStreamReader (in);
    }
}