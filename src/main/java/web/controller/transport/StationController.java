package web.controller.transport;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import web.service.transport.StationService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/station")
@RequiredArgsConstructor
public class StationController {
    private final StationService stationService;

    @GetMapping("/lift")
    public List<Map<String, String>> getLiftData() {
        return stationService.getLiftData();
    }

    /* @GetMapping("/schedule")
    public List<Map<String, String>> getScheduleData() {
        return stationService.getScheduleData();
    } */

    public List<Map<String, String>> getStationLocationData() {
        return stationService.getStationLocationData();
    }

    public List<Map<String, String>> getScheduleData() {
        return stationService.getScheduleData();
    }
}
