import Vue from 'vue'

import PostList from "@/components/Posts/PostList"
import AppControlInput from "~/Components/UI/AppControlInput"
import PostPreview from "@/components/Posts/PostPreview"
import AdminPostForm from "@/components/Admin/AdminPostForm"

Vue.component('PostList', PostList)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostPreview', PostPreview)
Vue.component('AdminPostForm', AdminPostForm)