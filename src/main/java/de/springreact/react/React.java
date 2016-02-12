package de.springreact.react;

import jdk.nashorn.api.scripting.NashornScriptEngine;
import org.springframework.stereotype.Component;

import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.Map;

@Component
public class React {

    private ThreadLocal<NashornScriptEngine> engineHolder = new ThreadLocal<NashornScriptEngine> () {

        @Override
        protected NashornScriptEngine initialValue() {

            NashornScriptEngine nashornScriptEngine = (NashornScriptEngine) new ScriptEngineManager ().getEngineByName ("nashorn");

            try {
                nashornScriptEngine.eval ("load ('src/main/resources/static/nashorn-polyfill.js')");
                nashornScriptEngine.eval ("load ('src/main/resources/static/vendor/react.js')");
                nashornScriptEngine.eval ("load ('src/main/resources/static/vendor/react-dom-server.js')");
                nashornScriptEngine.eval ("load ('src/main/resources/static/js/main.js')");
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
}
