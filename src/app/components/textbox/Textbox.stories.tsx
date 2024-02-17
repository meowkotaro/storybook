import { Meta, StoryObj } from "@storybook/react";
import { Textbox } from ".";

export default {
    title: "Components/Textbox",
    component: Textbox,
    tags: ["textbox", "autodocs"],
    argTypes: {
        placeholder: { control: "text" },
        value: { control: "text" },
        onChange: { action: "onChange" },
        type: { control: "text" },
    },
} as Meta;

type Story = StoryObj<typeof Textbox>;

export const Default: Story = {
    args: {
        colorType: "primary",
        type: "text",
        placeholder: "Enter your text here",
        value: "",
    },
};

export const Error: Story = {
    args: {
        colorType: "error",
        type: "text",
        placeholder: "Enter your text here",
        value: "",
        error: "This is an error",
    },
}
