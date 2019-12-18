<template>
<v-row
    align="center"
    justify="center"
>
    <v-col
        cols="6"
        sm="8"
        md="4"
    >
        <v-card class="elevation-12">
            <v-toolbar
            color="black"
            dark
            flat
            >
            <v-toolbar-title>Iniciar Instructor</v-toolbar-title>
            <v-spacer />
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                v-model="email"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                />

                <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                />
            </v-form>
            </v-card-text>
            <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="inicarInstructor">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
    <v-col
        cols="6"
        sm="8"
        md="4"
    >
        <v-card class="elevation-12">
            <v-toolbar
            color="black"
            dark
            flat
            >
            <v-toolbar-title>Inicar Cliente</v-toolbar-title>
            <v-spacer />
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                v-model="email"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                />

                <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                />
            </v-form>
            </v-card-text>
            <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="inicarCliente">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</v-row>
</template>
<script>
export default {
    name: 'Login',
    data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        inicarCliente(){
            this.$http({
                url: '/loginC',
                method: 'POST',
                data: { email: this.email, password: this.password }
            })
            .then(response => {
                if(response.data.status == 200){

                    localStorage.setItem('token', response.data.token)
                    this.$store.dispatch('autoLogin')
                    this.$store.commit('setRole', 'cliente')
                    this.$store.commit('setOptions', this.$store.state.role)
                    
                } else {
                    alert(response.data.message)
                }
            })
            .catch(e => console.log(e.message))
        },
        inicarInstructor(){
            this.$http({
                url: '/loginI',
                method: 'POST',
                data: { email: this.email, password: this.password }
            })
            .then(response => {
                if(response.data.status == 200){

                    localStorage.setItem('token', response.data.token)
                    this.$store.dispath('autoLogin')
                    this.$store.commit('setRole', 'instructor')
                    this.$store.commit('setOptions', this.$store.state.role)

                } else {
                    alert(response.data.message)
                }
            })
            .catch(e => console.log(e.message))
        }
    }
}
</script>