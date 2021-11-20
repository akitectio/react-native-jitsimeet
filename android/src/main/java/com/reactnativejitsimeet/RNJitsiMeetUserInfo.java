package com.reactnativejitsimeet;

import android.os.Bundle;

import java.net.MalformedURLException;
import java.net.URL;

public class RNJitsiMeetUserInfo {
    private String displayName;
    private String email;
    private URL avatar;

    public RNJitsiMeetUserInfo() {}

    public RNJitsiMeetUserInfo(Bundle b) {
        super();

        if (b.containsKey("displayName")) {
            displayName = b.getString("displayName");
        }

        if (b.containsKey("email")) {
            email = b.getString("email");
        }

        if (b.containsKey("avatarURL")) {
            String avatarURL = b.getString("avatarURL");
            try {
                avatar = new URL(avatarURL);
            } catch (MalformedURLException e) {
            }
        }
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public URL getAvatar() {
        return avatar;
    }

    public void setAvatar(URL avatar) {
        this.avatar = avatar;
    }

    Bundle asBundle() {
        Bundle b = new Bundle();

        if (displayName != null) {
            b.putString("displayName", displayName);
        }

        if (email != null) {
            b.putString("email", email);
        }

        if (avatar != null) {
            b.putString("avatarURL", avatar.toString());
        }

        return b;
    }
}
