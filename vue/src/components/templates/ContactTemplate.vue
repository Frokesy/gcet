<template>
    <div class="pt-[10vh] lg:pb-10 flex lg:flex-row flex-col-reverse justify-between">
        <div :class="`bg-[${themeColor}] text-[#fff] py-10 lg:w-[35%] lg:pl-20 pl-6 pr-6 mt-10 lg:mt-0`">
            <h2 class="text-[24px] font-semibold">Get in touch</h2>
            <p class="text-[#E9D7FE]">
                We love to hear from you. Our friendly team is always here to chat.
            </p>

            <div class="space-y-10">
                <div class="flex space-x-3 mt-10">
                    <EmailIcon />
                    <div>
                        <h2 class="text-[20px] font-semibold">Chat to us</h2>
                        <p class="pb-3 pt-1 text-[#E9D7FE]">
                            Our friendly team is here to help
                        </p>
                        <p>goatcloudstechnologies.com</p>
                    </div>
                </div>
                <div class="flex space-x-3 mt-10">
                    <LocationIcon />
                    <div>
                        <h2 class="text-[20px] font-semibold">Office</h2>
                        <p class="pb-3 pt-1 text-[#E9D7FE]">
                            Come say hello at our office HQ
                        </p>
                        <p>
                            100 Smith Street <br /> Collingwood VIC 3066 AU
                        </p>
                    </div>
                </div>
                <div class="flex space-x-3 mt-10">
                    <Phone />
                    <div>
                        <h2 class="text-[20px] font-semibold">Phone</h2>
                        <p class="pb-3 pt-1 text-[#E9D7FE]">
                            Mon - Fri from 8am to 5pm
                        </p>
                        <p>+234 801 234 5678</p>
                    </div>
                </div>

                <div class="pt-20 flex items-center space-x-10">
                    <CoFacebook />
                    <CoTwitter />
                    <CoLinkedIn />
                    <CoYoutube />
                </div>
            </div>
        </div>
        <div class="lg:w-[50%] lg:mr-20 mr-6 ml-6 lg:ml-0 pt-16">
            <h2 class="lg:text-[36px] text-[24px] font-semibold">
                We&apos;re here for you
            </h2>
            <p class="text-[#667085] lg:text-[20px] text-[12px]">
                You can reach us anytime via
                <a class="text-[#000]" :href="`mailto:goatcloudstechnologies.com`">
                    goatcloudstechnologies.com
                </a>
            </p>

            <div class="form mt-10 space-y-10">
                <div class="flex flex-col space-y-2">
                    <label for="name" class="text-[14px]">Name</label>
                    <input type="text" placeholder="Your name"
                        class="px-4 py-2.5 rounded-lg border border-[#ccc] outline-none w-[100%]" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="email" class="text-[14px]">Email</label>
                    <input type="text" placeholder="you@company.com"
                        class="px-4 py-2.5 rounded-lg border border-[#ccc] outline-none w-[100%]" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="phone" class="text-[14px]">Phone number</label>
                    <input type="text" placeholder="+234 801 234 5678"
                        class="px-4 py-2.5 rounded-lg border border-[#ccc] outline-none w-[100%]" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="help" class="text-[14px]">How can we help?</label>
                    <textarea placeholder="Tell us a little about the project"
                        class="px-4 py-2.5 rounded-lg border border-[#ccc] outline-none w-[100%]"></textarea>
                </div>

                <button :class="`w-[100%] py-3 bg-[${themeColor}] text-[#fff] rounded-lg`">
                    Get started
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import CoFacebook from "../icons/contactIcons/CoFacebook.vue"
import CoLinkedIn from "../icons/contactIcons/CoLinkedIn.vue"
import CoTwitter from "../icons/contactIcons/CoTwitter.vue"
import CoYoutube from "../icons/contactIcons/CoYoutube.vue"
import EmailIcon from "../icons/contactIcons/EmailIcon.vue"
import LocationIcon from "../icons/contactIcons/LocationIcon.vue"
import Phone from "../icons/contactIcons/Phone.vue"

export default defineComponent({
    name: "ContactTemplate",
    components: {
        CoFacebook,
        CoLinkedIn,
        CoTwitter,
        CoYoutube,
        EmailIcon,
        LocationIcon,
        Phone,
    },
    props: {
        themeColor: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>