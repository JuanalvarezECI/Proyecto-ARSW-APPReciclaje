package com.app.ecolapp.models.response;

import org.springframework.http.HttpStatus;

public class GenericResponse<T> {

    private HttpStatus code;
    private String message;
    private boolean state;
    private T data;

    public GenericResponse(){
    }

    public GenericResponse(HttpStatus code, String message, boolean state, T data) {
        this.code = code;
        this.message = message;
        this.state = state;
        this.data = data;
    }

    public HttpStatus getCode() {
        return code;
    }
    public void setCode(HttpStatus code) {
        this.code = code;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public boolean isState() {
        return state;
    }
    public void setState(boolean state) {
        this.state = state;
    }
    public T getData() {
        return data;
    }
    public void setData(T data) {
        this.data = data;
    }
    
}
