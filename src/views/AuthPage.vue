<template>
  <v-container class="auth-container" fluid>
    <v-form class="auth-form">
      <v-text-field 
        v-model="email" 
        label="Email" 
        required 
        class="auth-input" 
        outlined 
      ></v-text-field>
      <v-text-field 
        v-model="password" 
        label="Password" 
        type="password" 
        required 
        class="auth-input" 
        outlined 
      ></v-text-field>
      
      <!-- Button row -->
      <v-row>
        <v-col cols="4">
          <v-btn 
            @click="handleSignUp" 
            class="auth-btn sign-up-btn" 
            color="purple darken-2" 
            block
          >
            Sign Up
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn 
            @click="handleLogin" 
            class="auth-btn login-btn" 
            color="purple darken-3" 
            block
          >
            Log In
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn 
            @click="handleLogout" 
            class="auth-btn logout-btn" 
            color="purple darken-4" 
            block
          >
            Log Out
          </v-btn>
        </v-col>
      </v-row>
      
    </v-form>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { signUp, login, logout } from '../supabase';

export default {
  name: 'AuthPage', // Updated component name to follow Vue's multi-word component rule
  setup() {
    const email = ref('');
    const password = ref('');

    // Sign-up function
    const handleSignUp = async () => {
      const { error } = await signUp(email.value, password.value);
      if (error) {
        alert(`Sign Up Error: ${error.message}`);
      } else {
        alert('Sign Up Successful');
      }
    };

    // Login function
    const handleLogin = async () => {
      const { error } = await login(email.value, password.value);
      if (error) {
        alert(`Login Error: ${error.message}`);
      } else {
        alert('Login Successful');
      }
    };

    // Logout function
    const handleLogout = async () => {
      const { error } = await logout();
      if (error) {
        alert(`Logout Error: ${error.message}`);
      } else {
        alert('Logged Out Successfully');
      }
    };

    return { email, password, handleSignUp, handleLogin, handleLogout };
  },
};
</script>

<style scoped>
.auth-container {
  background-color: #121212;
  color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-form {
  max-width: 400px;
  width: 100%;
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.auth-input {
  background-color: #333;
  color: #fff;
  border-radius: 4px;
}

.auth-input .v-input__control {
  background-color: #333;
}

.auth-btn {
  margin-top: 15px;
}

.auth-btn:focus {
  box-shadow: none;
}

.sign-up-btn {
  background-color: #7e57c2;
}

.login-btn {
  background-color: #5e35b1;
}

.logout-btn {
  background-color: #512da8;
}
</style>
