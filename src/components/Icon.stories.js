import React from "react";
import Icon from "./Icon";

export default {
    component: Icon,
    title: "Icon",
}

const Template = args =><Icon {...args} />

export const Default = Template.bind({});
Default.args = {
    styles:{
        path: 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
        size: 22,
        color: "#000000",   
    },
    onClick: "#purple",
};

export const Trash = Template.bind({});
Trash.args = {
    styles:{
        path: 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z',
        size: 22,
        color: "red",
    },
    onClick: null,
}