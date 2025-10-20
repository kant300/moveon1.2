package web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import web.service.StationService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/station")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class StationController {
    private final StationService stationService;

    @GetMapping("/data")
    public List<Map<String, String>> getData() {
        return stationService.getData();
    }
}
