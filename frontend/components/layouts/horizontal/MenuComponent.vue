<script>
import { horizontalMenu } from "~/components/layouts/utils/menu.js";

export default {
  name: "MenuComponent",
  data() {
    return {
      horizontalMenu
    };
  },
  methods: {
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
  }
};
</script>

<template>
  <BContainer fluid>
    <div class="topnav">
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul class="navbar-nav">
            <template v-for="(item, index) of horizontalMenu" :key="index">
              <li class="nav-item dropdown">
                <nuxt-link v-if="!item.subItems" :to="item.link" class="nav-link dropdown-toggle arrow-none side-nav-link-ref">
                  <i :class="`${item.icon} me-2`"></i>
                  {{ $t(item.label) }}
                </nuxt-link>

                <a v-if="item.subItems" class="nav-link dropdown-toggle arrow-none" @click="onMenuClick" href="javascript: void(0);" id="topnav-components" role="button">
                  <i :class="`${item.icon} me-2`"></i>
                  {{ $t(item.label) }}
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-dashboard" v-if="hasItems(item)" :class="{
                  'dropdown-mega-menu-xl px-2': item.subItems.length > 11
                }">
                  <template v-for="(subitem, index) of item.subItems">
                    <nuxt-link :key="index" class="col dropdown-item side-nav-link-ref" v-if="item.subItems.length < 11 && !hasItems(subitem)" :to="subitem.link">{{ $t(subitem.label) }}</nuxt-link>
                    <div v-if="item.subItems.length > 11" :key="index">
                      <BRow v-if="index % 3 == 0">
                        <BCol lg="4">
                          <nuxt-link class="dropdown-item side-nav-link-ref" :to="subitem.link">{{ $t(item.subItems[index].label) }}</nuxt-link>
                        </BCol>
                        <BCol v-if="item.subItems[index + 1]" lg="4">
                          <nuxt-link class="dropdown-item side-nav-link-ref" :to="item.subItems[index + 1].link">{{ $t(item.subItems[index + 1].label) }}</nuxt-link>
                        </BCol>
                        <BCol v-if="item.subItems[index + 2]" lg="4">
                          <nuxt-link class="dropdown-item side-nav-link-ref" :to="item.subItems[index + 2].link">{{ $t(item.subItems[index + 2].label) }}</nuxt-link>
                        </BCol>
                      </BRow>
                    </div>
                    <div class="dropdown" v-if="hasItems(subitem)" :key="index">
                      <a class="dropdown-item" href="javascript: void(0);" @click="onMenuClick">
                        {{ $t(subitem.label) }}
                        <div class="arrow-down"></div>
                      </a>
                      <div class="dropdown-menu">
                        <nuxt-link v-for="(subSubitem, index) of subitem.subItems" :key="index" :to="subSubitem.link" class="dropdown-item side-nav-link-ref">{{ $t(subSubitem.label) }}</nuxt-link>
                      </div>
                    </div>
                  </template>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </nav>
    </div>
  </BContainer>
</template>
