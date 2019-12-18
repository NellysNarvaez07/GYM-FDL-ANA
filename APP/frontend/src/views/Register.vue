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
            <v-toolbar-title>Registrarse como cliente</v-toolbar-title>
            <v-spacer />
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                v-model="email"
                label="Email"
                name="email"
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

                <v-text-field
                v-model="nombre"
                label="Nombre"
                name="nombre"
                prepend-icon="mdi-account"
                type="text"
                />

                <v-text-field
                v-model="apellido"
                id="apellido"
                label="Apellido"
                name="apellido"
                prepend-icon="mdi-lock"
                type="text"
                />

                <v-text-field
                v-model="telefono"
                label="Telefono"
                name="telefono"
                prepend-icon="mdi-account"
                type="text"
                />

                <v-text-field
                v-model="sexo"
                id="sexo"
                label="Sexo"
                name="sexo"
                prepend-icon="mdi-lock"
                type="text"
                />

                <v-text-field
                v-model="peso"
                id="peso"
                label="Peso"
                name="peso"
                prepend-icon="mdi-lock"
                type="text"
                />
            </v-form>
            </v-card-text>
            <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="registrarCliente">Registrarse</v-btn>
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
            <v-toolbar-title>Registrarse como instructor</v-toolbar-title>
            <v-spacer />
            </v-toolbar>
            <v-card-text>
            <v-form>
                                <v-text-field
                v-model="email"
                label="Email"
                name="email"
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

                <v-text-field
                v-model="nombre"
                label="Nombre"
                name="nombre"
                prepend-icon="mdi-account"
                type="text"
                />

                <v-text-field
                v-model="apellido"
                id="apellido"
                label="Apellido"
                name="apellido"
                prepend-icon="mdi-lock"
                type="text"
                />

                <v-text-field
                v-model="telefono"
                label="Telefono"
                name="telefono"
                prepend-icon="mdi-account"
                type="text"
                />

                <v-text-field
                v-model="sexo"
                id="sexo"
                label="Sexo"
                name="sexo"
                prepend-icon="mdi-lock"
                type="text"
                />
            </v-form>
            </v-card-text>
            <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="registrarInstructor">Registrarse</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</v-row>
</template>
<script>
export default {
    name: 'Register',
    data: () => ({
        email: '',
        password: '',
        nombre: '',
        apellido: '',
        telefono: '',
        cedula: '',
        sexo: '',
        peso: '',

    }),
    methods: {
        registrarCliente(){
            this.$http({
                url: '/registerC',
                method: 'POST',
                data: { 
                    email: this.email, 
                    password: this.password,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    telefono: this.telefono,
                    cedula: this.cedula,
                    sexo: this.sexo,
                    peso: this.peso,
                }
            })
            .then(response => {
                console.log(response)
                if(response.data.status == 200){
                    localStorage.setItem('token', response.data.token)
                    this.$store.dispatch('autoLogin')
                    this.$store.commit('setRole', 'cliente')
                    this.$store.commit('setOptions')
                } else {
                    alert(response.data.message)
                }
            })
            .catch(e => console.log(e.message))
        },
        registrarInstructor(){
            this.$http({
                url: '/registerI',
                method: 'POST',
                data: { 
                    email: this.email, 
                    password: this.password,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    telefono: this.telefono,
                    cedula: this.cedula,
                    sexo: this.sexo,
                }
            })
            .then(response => {
                if(response.data.status == 200){
                    localStorage.setItem('token', response.data.token)
                    this.$store.dispatch('autoLogin')
                    this.$store.commit('setRole', 'cliente')
                    this.$store.commit('setOptions')
                } else {
                    alert(response.data.message)
                }
            })
            .catch(e => console.log(e.message))
        }
    }
}
</script>