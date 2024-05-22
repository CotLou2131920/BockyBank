"use client"
import React from "react";
import FormGestion from "./ComposantsGestion/FormGestion";
export default function Home({params}) {
    return (
    <>
        <FormGestion id={params.id}></FormGestion>
    </>
    );
}