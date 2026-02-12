// "use server"
// import {Resend} from 'resend';
// import { FormData} from '@/components/MultiStepForm'; 
// import {z} from 'zod'



// const resend = new Resend(process.env.RESEND_API_KEY);

// // Validation of contact's form fields:
// const contactFormSchema = z.object({
//     name: z.string().min(2,"Imię jest za krótkie"),
//     email:z.string().email("Niepoprawny format email"),
//     phone:z.string().min(9,"Numer telefonu jest za krótki"),
//     sessionType: z.string().min(2,"Wybierz typ sesji"),
//     message: z.string().min(5,"Wiadomość musi mieć min. 5 znaków")
// });

// export async function submitContactForm(data: FormData , token:string){
//     try{
//         const recaptchaResponse =await fetch(
//             `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
//             { method: "POST" })
//         const recaptchaData = await recaptchaResponse.json();
//             if (!recaptchaData.success || recaptchaData.score < 0.5) {
//             return { success: false, error: "Wykryto aktywność bota." };
//         }
//         const validatedFields = contactFormSchema.safeParse(data);
//         if(!validatedFields.success){
//             console.error("BŁĄD WALIDACJI:", validatedFields.error.flatten().fieldErrors);
//             return { success: false, error: "Niepoprawne dane w formularzu" };
//         }

//         const v = validatedFields.data



//         await resend.emails.send(
//             {
//                 from:'Zaczarowany Kadr <kontakt@zaczarowanykadr.pl>',
//                 to:'kontakt@zaczarowanykadr.pl',
//                 subject: `Nowe zlecenie: Sesja ${v.sessionType}`,
//                 text:
//                 `
//                 Klient:${v.name},
//                 Telefon:${v.phone},
//                 Email:${v.email},
//                 Typ sesji:${v.sessionType},
//                 Data:${data.date_Of_Session},
//                 Slot czasowy:${data.timeSlot},
//                 Wykupiony pakiet:${data.plan},
//                 Wiadomość: ${v.message}
//                 `,
//             }
//         );
        
//         return {success: true}
//     }catch (error){
//          console.log("Error about contact form: ",error)
//         return {success: false,error}
//     }

// }
"use server"
import { Resend } from 'resend';
import { FormData } from '@/components/MultiStepForm'; 
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
    name: z.string().min(2, "Imię jest za krótkie"),
    email: z.string().email("Niepoprawny format email"),
    phone: z.string().min(9, "Numer telefonu jest za krótki"),
    sessionType: z.string().min(2, "Wybierz typ sesji"),
    message: z.string().min(5, "Wiadomość musi mieć min. 5 znaków")
});

export async function submitContactForm(formData: FormData, token: string) {
    try {
        // 1. Weryfikacja reCAPTCHA
        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            { method: "POST" }
        );
        const recaptchaData = await recaptchaResponse.json();
        
        console.log("reCAPTCHA Score:", recaptchaData.score); // Zobacz wynik w konsoli serwera

        if (!recaptchaData.success || recaptchaData.score < 0.5) {
            return { success: false, error: "Wykryto aktywność bota (Score: " + recaptchaData.score + ")" };
        }

        // 2. Walidacja danych
        const validatedFields = contactFormSchema.safeParse(formData);
        if (!validatedFields.success) {
            return { success: false, error: "Niepoprawne dane w formularzu" };
        }

        const v = validatedFields.data;

        // 3. Wysyłka przez Resend (zmieniona nazwa zmiennej na resendResult)
        const resendResult = await resend.emails.send({
            from: 'Zaczarowany Kadr <kontakt@zaczarowanykadr.pl>',
            to: 'kontakt@zaczarowanykadr.pl',
            subject: `Nowe zlecenie: Sesja ${v.sessionType}`,
            text: `
                Klient: ${v.name}
                Telefon: ${v.phone}
                Email: ${v.email}
                Typ sesji: ${v.sessionType}
                Data: ${formData.date_Of_Session}
                Slot czasowy: ${formData.timeSlot}
                Wykupiony pakiet: ${formData.plan}
                Wiadomość: ${v.message}
            `,
        });

        if (resendResult.error) {
            console.error("Błąd Resend API:", resendResult.error);
            return { success: false, error: "Serwer pocztowy odrzucił wiadomość." };
        }

        console.log("Email wysłany pomyślnie! ID:", resendResult.data?.id);
        return { success: true };

    } catch (error) {
        console.error("KRYTYCZNY BŁĄD:", error);
        return { success: false, error: "Wystąpił nieoczekiwany błąd serwera." };
    }
}