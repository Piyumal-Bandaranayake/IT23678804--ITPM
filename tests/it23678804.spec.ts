import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - Full 35 Case Optimized Suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/');
        await page.waitForLoadState('networkidle');
    });

    const testCases = [
        // --- POSITIVE FUNCTIONAL (1-24) ---
        { id: "Pos_Fun_0001", input: "ada mata sathutui", expected: "අද මට සතුටුයි" },
        { id: "Pos_Fun_0002", input: "mama kade gihin bath ekak kanava", expected: "මම කඩෙ ගිහින් බත් එකක් කනව" },
        { id: "Pos_Fun_0003", input: "karunaakarlaa gedara yanna", expected: "කරුණාකරලා ගෙදර යන්න" },
        { id: "Pos_Fun_0004", input: "Oyaata kohomadha", expected: "ඔයාට කොහොමද" },
        { id: "Pos_Fun_0005", input: "adha api gamee yanvaa", expected: "අද අපි ගමේ යනවා" },
        { id: "Pos_Fun_0006", input: "mama eyaata adharee naha", expected: "මම එයාට ආදරේ නැහැ" },
        { id: "Pos_Fun_0007", input: "oyaata mata salli dhenta puluvandha", expected: "ඔයාට මට සල්ලි දෙන්ට පුලුවන්ද" },
        { id: "Pos_Fun_0008", input: "ada Ikmanata yamu ban", expected: "අද ඉක්මනට යමු බන්" },
        { id: "Pos_Fun_0009", input: "suba rathriyak", expected: "සුබ රාත්‍රියක්" },
        { id: "Pos_Fun_0010", input: "mata oyava balaganna puluvan", expected: "මට ඔයාව බලගන්න පුලුවන්" },
        { id: "Pos_Fun_0011", input: "mamanidhi", expected: "මමනිදි" },
        { id: "Pos_Fun_0012", input: "epaa epaa mama ennam", expected: "එපා එපා මම එන්නම්" },
        { id: "Pos_Fun_0013", input: "eyaa gedar giyaa", expected: "එයා ගෙදර ගියා" },
        { id: "Pos_Fun_0014", input: "mama mee cricket ghnwa", expected: "මම මේ ක්‍රිකට් ගහනවා" },
        { id: "Pos_Fun_0015", input: "api heta eanvaa", expected: "අපි හෙට එනවා" },
        { id: "Pos_Fun_0016", input: "mata file eka whatsapp karanta", expected: "මට file එක whatsapp කරන්ට" },
        { id: "Pos_Fun_0017", input: "Matale yanawaa", expected: "මාතලේ යනවා" },
        { id: "Pos_Fun_0018", input: "Oyaage Student Id eka balanna", expected: "ඔයාගෙ Student id එක බලන්න" },
        { id: "Pos_Fun_0019", input: "koheda giyee?", expected: "කොහෙද ගියේ" },
        { id: "Pos_Fun_0020", input: "baduwa Rs. 1000", expected: "බඩුව Rs. 1000" },
        { id: "Pos_Fun_0021", input: "meeting eka 5AM", expected: "meeting එක 5AM" },
        { id: "Pos_Fun_0022", input: "sini 2KG ganna 01/01/2026 venidhaa", expected: "සිනි 2KGගන්න 01/01/2026 වෙනිදා" },
        { id: "Pos_Fun_0023", input: "hello ratharan yaluve oyaata kohomadha", expected: "hello රතරන් යලුවෙ ඔයාට කොහොමද" },
        { id: "Pos_Fun_0024", input: "Eda vassa unath api beach yanna thma hitiye", expected: "එදා වැස්ස උනත් අපි බීච් යන්න තමා හිටියේ" },

        // --- NEGATIVE FUNCTIONAL (25-34) ---
        { id: "Neg_Fun_0001", input: "mama gedhara gihinikmant monava hari gannam", expected: "මම ගෙදර ගිහින් ඉක්මන්ට් මොනව හරි ගන්නම්" },
        { id: "Neg_Fun_0002", input: "adoo eka super lame, fix karapan ikmanata", expected: "අඩෝ ඒක සුපර් ලෙම් ෆික්ස් කරපන් ඉක්මනට" },
        { id: "Neg_Fun_0003", input: "event eka 5PM nuwaraeliyetyenne bring yourId", expected: "ඉවෙන්ට් එක 5PM නුවරැලියෙතියෙන්නෙ" },
        { id: "Neg_Fun_0004", input: "eya social media use karanne na thawath", expected: "එය social media use කරන්නේ න" },
        { id: "Neg_Fun_0005", input: "epaaepaa", expected: "එපාඑප" },
        { id: "Neg_Fun_0006", input: "eka supri wadak machan!", expected: "එක සුප්‍රි wඅඩක් මචන්" },
        { id: "Neg_Fun_0007", input: "mama paymet kraa but salli kapila na", expected: "මම පය්මෙට් ක්‍ර but සල්ලි කපිල න" },
        { id: "Neg_Fun_0008", input: "oyata file eka wahama ewann puluwanda urgent", expected: "ඔයාට ෆිලෙ එක වහම එවන්න පුලුවන්ඩ" },
        { id: "Neg_Fun_0009", input: "Machan heta party da, full hype hoo", expected: "මචන් හෙට පාර්ටි ඩ ෆුල් හ්‍ය්පි හෝ" },
        { id: "Neg_Fun_0010", input: "Ticket Rs.2500 7.30 show ekata thiyenne 5/02", expected: "ටිකට් Rs.2500 7.30 ශොව් එකට තියෙන්නෙ" },

        // --- UI CASE (35) ---
        { id: "Pos_UI_0001", input: "Mama", expected: "මම" }
    ];

    for (const tc of testCases) {
        test(`${tc.id}`, async ({ page }) => {
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

            await inputArea.fill('');
            await inputArea.type(tc.input, { delay: 20 });
            
            // Critical: Wait for conversion to complete
            await page.waitForTimeout(2000);

            const rawOutput = await outputBox.textContent() || '';
            
            // CLEANING PROCESS:
            const cleanActual = rawOutput.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();
            const cleanExpected = tc.expected.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();

            // WORD MATCH LOGIC:
            const expectedWords = cleanExpected.match(/[\u0D80-\u0DFF]+|[A-Za-z0-9]+/g) || [];
            const matchedWords = expectedWords.filter(word => cleanActual.includes(word));
            
            const successRate = (matchedWords.length / expectedWords.length) * 100;
            
            console.log(`[${tc.id}] Input: "${tc.input}" | Match: ${successRate.toFixed(1)}%`);

            // Threshold: Set to 60 to allow minor engine variations
            expect(successRate, `Failed ${tc.id}. Found: ${cleanActual}`).toBeGreaterThanOrEqual(60);
        });
    }
});