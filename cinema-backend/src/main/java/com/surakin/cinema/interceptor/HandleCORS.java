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
        if (request.getMethod().equalsIgnoreCase("OPTIONS")) {
            response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            response.setHeader("Access-Control-Allow-Headers", "content-type");
            response.addHeader("Access-Control-Allow-Methods", "DELETE");
            response.setStatus(200);
        }
        if (request.getMethod().equalsIgnoreCase("DELETE")) {
            response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            response.setStatus(200);
        }
    }
}
