"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import styles from './searchform.module.css';

export default function SearchForm() {
    const router = useRouter();
    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        router.push(`/er/players/${event.currentTarget.player.value}`)
    }

    return (
        <form className={styles['main-section-formWrapper']} onSubmit={onSubmit}>
            <input name="player" type="text" placeholder="플레이어 닉네임을 입력해주세요." required></input>
            <button type="submit" aria-label="플레이어 검색하기">
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8086 12.8633L11.0742 10.1289C10.9375 10.0195 10.7734 9.9375 10.6094 9.9375H10.1719C10.9102 8.98047 11.375 7.77734 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7 12.125 8.20312 11.6875 9.1875 10.9219V11.3867C9.1875 11.5508 9.24219 11.7148 9.37891 11.8516L12.0859 14.5586C12.3594 14.832 12.7695 14.832 13.0156 14.5586L13.7812 13.793C14.0547 13.5469 14.0547 13.1367 13.8086 12.8633ZM5.6875 9.9375C3.74609 9.9375 2.1875 8.37891 2.1875 6.4375C2.1875 4.52344 3.74609 2.9375 5.6875 2.9375C7.60156 2.9375 9.1875 4.52344 9.1875 6.4375C9.1875 8.37891 7.60156 9.9375 5.6875 9.9375Z" fill="#363944"></path></svg>
            </button>
        </form>
    )
}