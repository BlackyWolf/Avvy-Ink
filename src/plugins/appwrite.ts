import { Client, Account, ID, Databases, Storage, Functions, Locale, Avatars } from 'appwrite';

export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfiguration = useRuntimeConfig();

    const client = new Client()
        .setEndpoint(runtimeConfiguration.public.appwriteEndpoint)
        .setProject(runtimeConfiguration.public.appwriteProjectId);

    return {
        provide: {
            appwrite: {
                account: new Account(client),
                avatars: new Avatars(client),
                databases: new Databases(client),
                functions: new Functions(client),
                locale: new Locale(client),
                storage: new Storage(client)
            }
        }
    };
});
