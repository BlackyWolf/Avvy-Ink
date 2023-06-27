<script setup lang="ts">
definePageMeta({
    layout: 'landing'
});
</script>

<template>
    <Hero class="flex justify-between items-center mb-12">
        <div>
            <Heading size="1" class="text-white mb-0">
                My <span class="text-red-400">Look</span><br />
                My <span class="text-yellow-400">Feel</span><br />
                My <span class="font-pacifico font-light underline">Avatar</span>
            </Heading>
        </div>

        <div>
            <Heading size="4" class="flex items-center">
                Avatars for a
                <span class="flex items-center font-black text-medium-violet-500 ml-1"><Icon name="ph:globe" class="" /> WWW</span>
            </Heading>

            <Paragraph>
                Your face in one place, available across the myriad interwebs.
            </Paragraph>
            <Paragraph>
                Full and total control over your dynamic vision online.
            </Paragraph>
            <Paragraph>
                Many websites, and one managed gallery.
            </Paragraph>
            <Paragraph class="text-[0.4rem]">
                Sorry, I couldn't think of anything cool.
            </Paragraph>
        </div>
    </Hero>

    <div class="relative isolate">
        <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
            <div
                class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            ></div>
        </div>

        <Heading size="1" class="text-center text-medium-violet-500 font-raleway">Pricing</Heading>

        <Paragraph class="text-center mb-8">Affordable plans with straight forward prices.</Paragraph>

        <div class="grid grid-cols-6 justify-center items-center pricing-bg">
            <Card class="col-span-2 col-start-2 ring-4 z-10 ring-medium-violet-400">
                <Heading size="3" bold>
                    <span class="uppercase">Free</span><span class="text-2xl font-normal ml-2">/forever</span>
                </Heading>

                <Paragraph>
                    Get started for free, no credit card required and no time limit.
                </Paragraph>

                <ul class="mb-6">
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        3 avatars
                    </li>
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        2mb file uploads
                    </li>
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        Avatar CDN links
                    </li>
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        Community support
                    </li>
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        Default image size
                    </li>
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        Showcase gallery
                    </li>
                </ul>

                <Button color="indigo" light>Get started</Button>
            </Card>
            <Card class="col-span-2 rounded-l-none shadow-none border-2 border-l-0 border-slate-300 bg-opacity-30">
                <Heading size="3" bold>
                    $5<span class="text-2xl font-normal ml-2">/month</span>
                </Heading>

                <Paragraph>
                    Everything included in free, plus:
                </Paragraph>

                <ul class="mb-6">
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        Unlimited avatars
                    </li>
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        10mb file uploads
                    </li>
                    <li>
                        <Icon name="ph:check" class="mr-2 text-green-600"></Icon>
                        Multiple image sizes*
                    </li>
                </ul>

                <Button color="indigo" outline>Sign-up</Button>
            </Card>
        </div>

        <Paragraph class="text-xs text-center mt-6">
            * By default, sizes are capped to the actual size of the image. Meaning, a 100x100 pixel avatar will not
            automatically generate a URL link to a larger size.<br />
            This setting can be overriden by using custom sizes, but we make no guarantee of the image quality.
        </Paragraph>

        <Paragraph class="text-center mt-6 text-sm">
            Pricing can be paid on a monthly or yearly basis. We do not issue refunds for lawful transactions. If you choose
            to cancel, your plan will be active till the end of the term.<br />
            If you have content uploaded above the limits of the free plan when your plan ends, that content will become unavailable.<br />
            Any content that is within the limits of the free plan will still be usable.
        </Paragraph>
    </div>

    <Heading size="1" class="text-center text-medium-violet-500 font-raleway mt-12">Features</Heading>

    <Paragraph class="text-center mb-8">Below are some of the features we offer to users and third-parties.</Paragraph>

    <div class="grid grid-cols-2 gap-4">
        <Card>
            <Heading size="3" bold center>
                <Icon name="carbon:content-delivery-network" class="text-orange-700 mr-2"></Icon>
                Avatar CDN
            </Heading>

            <Paragraph>
                When you upload your avatars and profile pics, we generate a unique URL you can use
                on other websites and apps that support it.
            </Paragraph>

            <NuxtLink class="font-semibold text-blue-600">Read more</NuxtLink>
        </Card>
        <Card>
            <Heading size="3" bold center>
                <Icon name="fluent:people-community-16-filled" class="text-blue-700 mr-2"></Icon>
                Community Support
            </Heading>

            <Paragraph>
                We offer an online forum where you can talk with other users, get online help, share and
                show off your avatars, and so much more!
            </Paragraph>

            <NuxtLink class="font-semibold text-blue-600">Read more</NuxtLink>
        </Card>
        <Card>
            <Heading size="3" bold center>
                <Icon name="ion:ios-images" class="text-green-700 mr-2"></Icon>
                Showcase Gallery
            </Heading>

            <Paragraph>
                Users have the ability to create a showcase gallery where they can show off their avatars publically.
            </Paragraph>
            <Paragraph>
                Galleries can be made private. For those who choose to make them public, may have their
                gallery occasionally showcased where others can see.
            </Paragraph>

            <NuxtLink class="font-semibold text-blue-600">Read more</NuxtLink>
        </Card>
        <Card>
            <Heading size="3" bold center>
                <Icon name="ic:twotone-app-shortcut" class="text-gray-500 mr-2"></Icon>
                App Integration <span class="font-light ml-auto">(coming soon)</span>
            </Heading>

            <Paragraph>
                As <strong>developers</strong>, you can make use of our APIs to integrate avatars into your app based off
                of user URLs, emails, usernames, unique IDs, or other meta data assigned by the user.
            </Paragraph>
            <Paragraph>
                As <strong>users</strong>, you decide who can access your avatars. Need to reject an apps access to your images?
                It's as easy as clicking a button. Need to re-create a CDN link? No problem.
            </Paragraph>

            <NuxtLink class="font-semibold text-blue-600">Read more</NuxtLink>
        </Card>
    </div>
</template>

<style scoped>
/* .paid-gradient {
    background: linear-gradient(
        -45deg,
        rgb(79, 54, 188) 0%, rgb(79, 54, 188) 10%,
        rgb(104, 83, 200) 10%, rgb(104, 83, 200) 20%,
        rgb(128, 111, 207) 20%, rgb(128, 111, 207) 30%,
        rgb(151, 136, 216) 30%, rgb(151, 136, 216) 40%,
        rgb(173, 161, 226) 40%, rgb(173, 161, 226) 50%,
        rgb(173, 161, 226) 100%
    );
} */
/* .pricing-bg {
    background: radial-gradient(#bbb, transparent);
} */
</style>
