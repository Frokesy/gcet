<template>
    <Header active="footwear" />
    <div class="pt-[15vh] pb-10 w-[90vw] mx-auto">
        <h2 class="text-[30px] font-semibold">Profile Settings</h2>
        <div class="flex justify-between mt-10">
            <!-- Sidebar -->
            <div class="bg-[#faf9f6] w-[20%] px-6 pt-10 pb-3 lg:flex hidden flex-col space-y-4">
                <p class="bg-[#fff] px-6 py-3 rounded-md">Profile Details</p>
                <p class="bg-[#fff] px-6 py-3 rounded-md">Notifications</p>
                <p class="bg-[#fff] px-6 py-3 rounded-md">Security</p>
                <p class="bg-[#fff] px-6 py-3 rounded-md">History</p>
                <p class="bg-[#fff] px-6 py-3 rounded-md">Saved Cards</p>
                <div class="pt-[13vh]">
                    <p class="bg-[#fff] px-6 py-3 rounded-md text-[#808080]">Log out</p>
                </div>
            </div>

            <!-- Main Content -->
            <div class="lg:w-[80%] lg:text-[14px] text-[13px] bg-[#fff] lg:pt-10 pb-3 lg:px-6">
                <h2 class="text-[18px] font-semibold">Personal Info</h2>
                <p class="text-[14px] text-[#808080] mt-2 pb-4">
                    Update your photo and personal details here.
                </p>
                <hr />

                <!-- Name Section -->
                <div class="py-6 lg:w-[70%] flex items-center justify-between">
                    <label for="name" class="text-[14px] text-[#344054] font-semibold">Name</label>
                    <div class="input flex lg:space-x-6 space-x-3 lg:w-[60%] w-[75%]">
                        <input type="text" placeholder="Joseph"
                            class="border border-[#ccc] py-2 px-4 w-[50%] outline-none placeholder:text-[#333] rounded-md" />
                        <input type="text" placeholder="Danjuma"
                            class="border border-[#ccc] py-2 px-4 w-[50%] outline-none placeholder:text-[#333] rounded-md" />
                    </div>
                </div>
                <hr />

                <!-- Email Section -->
                <div class="py-6 lg:w-[70%] flex items-center justify-between">
                    <label for="email" class="text-[14px] text-[#344054] font-semibold">Email Address</label>
                    <div class="w-[60%] border border-[#ccc] rounded-md py-2 px-4 flex items-center space-x-2">
                        <EmailFieldIcon />
                        <input type="email" placeholder="josephdanjuma@gmail.com"
                            class="border-none outline-none w-[100%] placeholder:text-[#333]" />
                    </div>
                </div>

                <!-- Phone Section -->
                <div class="lg:w-[70%] flex items-center pb-6 justify-between">
                    <label for="phone" class="text-[14px] text-[#344054] font-semibold">Phone Number</label>
                    <div class="w-[60%] border border-[#ccc] rounded-md py-2 px-4 flex items-center space-x-2">
                        <PhoneFieldIcon />
                        <input type="tel" placeholder="234 801 234 5678"
                            class="border-none outline-none w-[100%] placeholder:text-[#333]" />
                    </div>
                </div>
                <hr />

                <!-- Billing Address Section -->
                <div class="lg:w-[70%] flex items-center py-6 justify-between">
                    <label for="address" class="text-[14px] text-[#344054] font-semibold">Billing Address</label>
                    <div class="w-[60%] border border-[#ccc] rounded-md py-2 px-4 flex items-center space-x-2">
                        <AddressBookIcon />
                        <input type="text" placeholder="23, Openda street, Lagos state"
                            class="border-none outline-none w-[100%] placeholder:text-[#333]" />
                    </div>
                </div>
                <hr />

                <!-- Action Buttons -->
                <div class="flex justify-end mt-6 space-x-6">
                    <button class="border border-[#ccc] py-2 px-6 rounded-lg">Cancel</button>
                    <button class="bg-[#000] text-[#fff] py-2 px-6 rounded-lg">Save</button>
                </div>
            </div>
        </div>
    </div>
    <Footer active="footwear" />
</template>

<script>
import AddressBookIcon from "../../components/icons/profileIcons/AddressBookIcon.vue"
import EmailFieldIcon from "../../components/icons/profileIcons/EmailFieldIcon.vue"
import PhoneFieldIcon from "../../components/icons/profileIcons/PhoneFieldIcon.vue"
import Header from "../../components/defaults/Header.vue"
import Footer from "../../components/defaults/Footer.vue"


export default {
    name: "AccountProfile",
    components: {
        Header,
        Footer,
        AddressBookIcon,
        EmailFieldIcon,
        PhoneFieldIcon,
    },
};
</script>

<style scoped>
/* Add styles here if needed */
</style>