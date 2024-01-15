package com.testapp.backend.config;

import static com.testapp.backend.constants.AppConstants.*;

public class StoreNotFoundException extends Exception {

    public StoreNotFoundException () {
        super(STORE_NOT_FOUND_GENERAL_EXCEPTION);
    }

    public StoreNotFoundException(String message) {
        super(message);
    }

    public StoreNotFoundException(String message, Throwable stack) {
        super(message, stack);
    }
}
