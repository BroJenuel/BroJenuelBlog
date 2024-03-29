<script setup lang="ts">
type MenuTypeItem = { label: string; key: string; icon: string };
type MenuTYPE = Array<MenuTypeItem>;
const showMenu = ref(false);
const dropdownRef = ref(null);
const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps({
    menuOptions: Array,
    label: { type: String, default: "Label" },
    modelValue: String,
    position: {
        type: String,
        default: "left",
        validator(v: string) {
            return ["left", "right"].includes(v);
        },
    },
});
const menus = props.menuOptions as MenuTYPE;
const LABEL = computed(() => {
    const findIndex = menus.findIndex((menu) => menu.key == valueKey.value);
    if (findIndex > -1) return menus[findIndex].label;
    return null;
});

const valueKey = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});

function selectKey(menu: MenuTypeItem) {
    const url = window.location.href;
    const r = new URL(url);

    showMenu.value = false;
    if (valueKey.value != menu.key) {
        r.searchParams.delete("cat");
        r.searchParams.append("cat", menu.key);
        valueKey.value = menu.key;
    } else {
        r.searchParams.delete("cat");
        valueKey.value = undefined;
    }

    const newUrl = r.href;
    window.history.pushState(
        {
            current: `/blog?cat=${menu.key}`,
        },
        "",
        newUrl
    );
    emit("change", valueKey.value);
}
onClickOutside(dropdownRef, () => (showMenu.value = showMenu.value == true ? false : false));
</script>
<template>
    <div ref="dropdownRef" class="relative inline-block text-left">
        <div
            type="button"
            class="flex items-center gap-5px cursor-pointer hover:underline select-none"
            @click="showMenu = !showMenu"
            :class="{ 'text-[var(--primary)]': showMenu }"
        >
            <span :class="{ 'text-[var(--primary)]': LABEL }">{{ valueKey ? LABEL ?? label : label ?? "Label" }}</span>
            <span
                class="icon--ic icon--ic--outline-play-arrow transition-all"
                :class="{ 'transform rotate-90': showMenu }"
            />
        </div>

        <Transition name="drop-menu">
            <div
                v-show="showMenu"
                class="dropdown-menu absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-[var(--background-secondary-opacity-100)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-99 select-none"
                :class="{ 'right-0': props.position == 'left', 'left-0': props.position == 'right' }"
            >
                <div class="py-1" role="none">
                    <small class="pl-4">
                        {{ label }}
                    </small>
                    <div
                        v-for="menu in menus"
                        :key="menu.key"
                        @click="selectKey(menu)"
                        class="block px-4 lg:py-2 py-5 text-sm hover:bg-[var(--background-secondary)] flex items-center justify-between cursor-pointer"
                        :class="{ '!text-[var(--primary)]': valueKey == menu.key }"
                    >
                        <span class="flex items-center gap-6px">
                            <span class="text-size-20px" :class="menu.icon" /> {{ menu.label }}
                        </span>
                        <span v-if="valueKey == menu.key" class="icon--solar icon--solar--close-square-bold" />
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style lang="scss">
.drop-menu-enter-active {
    transition: all 0.2s ease-out;
}

.drop-menu-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.drop-menu-enter-from,
.drop-menu-leave-to {
    transform: translate(10px, -10px);
    opacity: 0;
}
</style>
