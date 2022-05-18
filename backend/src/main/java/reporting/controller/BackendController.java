package reporting.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import reporting.repository.UserRepository;

@Controller
@RequestMapping("/api")
public class BackendController {

    private static final Logger LOG = LoggerFactory.getLogger(BackendController.class);

    public static final String HELLO_TEXT = "Hello from Spring Boot Backend!";
    public static final String SECURED_TEXT = "Hello from the secured resource!";
    public static final String REPORTING_TEXT = "Hello from the reporting resource!";
    public static final String REPORTING_GET_ENDPOINT =
            "http://reporting.service.qa11-dev1-jfk.dev1.jfk.shapeways.net/api/inshape/vueSampleData1?manufacturerId=13&materialFamilyIds=1";
    public static final String REPORTING_STATUS_ENDPOINT = "http://reporting.service.qa11-dev1-jfk.dev1.jfk.shapeways.net/status";

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @ResponseBody
    @RequestMapping(path = "/hello")
    public String sayHello() {
        String response = restTemplate.getForObject(REPORTING_STATUS_ENDPOINT, String.class);
        return response;
    }

    @ResponseBody
    @RequestMapping(path="/reporting", method = RequestMethod.GET)
    public String getReporting() {
        LOG.debug("GET successfully called on /reporting resource");

        String response = restTemplate.getForObject(REPORTING_GET_ENDPOINT, String.class);
        return response;
    }

}
