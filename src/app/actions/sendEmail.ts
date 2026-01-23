"use server"
import {Resend} from 'resend';
import { FormData} from '@/components/MultiStepForm'; 



const resend = new Resend(process.env.RESEND_API_KEY);
console.log("CZY WIDZĘ KLUCZ API?:", process.env.RESEND_API_KEY ? "TAK" : "NIE");
console.log("POCZĄTEK KLUCZA:", process.env.RESEND_API_KEY?.substring(0, 7));

export async function submitContactForm(data: FormData){
    try{
        await resend.emails.send(
            {
                from:'<kontakt@zaczarowanykadr.pl>',
                to:'<sdettlaff001@gmail.com>',
                // to:'<onboarding@resend.dev>',
                subject: `Nowe zlecenie: ${data.sessionType}`,
                text:
                `
                Klient:${data.name}
                Telefon:${data.phone}
                Email:${data.email}
                Typ sesji:${data.sessionType}
                Data:${data.date_Of_Session}
                Slot czasowy:${data.timeSlot}
                Wykupiony pakiet:${data.plan}
                Wiadomość: ${data.message}
                `,
            }
        );
        return {success: true}
    }catch (error){
        return {success: false,error}
    }

}