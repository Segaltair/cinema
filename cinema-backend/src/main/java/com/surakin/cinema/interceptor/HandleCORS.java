package com.surakin.cinema.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HandleCORS implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        //todo for some reason header set working only for options, so may be should try aspect?
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        if (request.getMethod().equalsIgnoreCase("OPTIONS")) {
            response.setHeader("Access-Control-Allow-Headers", "content-type, authorization");
//            response.addHeader("Access-Control-Allow-Methods", "DELETE");
            response.setStatus(200);
        }
        if (request.getMethod().equalsIgnoreCase("DELETE")) {
//            response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            response.setStatus(200);//todo what if error status from controller?
        }
        if (request.getMethod().equalsIgnoreCase("POST")) {
            //todo header doesnt set if response not null
            //todo so better move add headers to advice
//            response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        }
    }
}
