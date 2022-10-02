window.addEventListener("load", function() {

// DOM Elements
    const form = document.getElementById('badanie');
    const submitButton = document.getElementById('submit');
    const feedback = document.querySelector('#feedback');
    const reseter = document.querySelector('.reset');
    const summary = document.querySelector('#summary');

// data variable    
    const data = new FormData(form);

    let sent = localStorage.getItem('sent') || false;

// sent and reset
reseter.addEventListener("click", function() {
    summary.style.display = 'none';
    localStorage.clear();
    form.reset()
});



// Metryczka
        const plec = Number(data.get('płeć'));
        const wiek = Number(data.get('wiek'));
        const cywilny = Number(data.get('cywilny'));
        const zaw = Number(data.get('zawód'));

        const szwd = Number(data.get('zwDni'));
        const szwt = Number(data.get('zwTyg'));
        const szwm = Number(data.get('zwMsc'));
        const szwy = Number(data.get('zwRok'));
            if (cywilny == 1 || cywilny == 2 || cywilny == 6 || cywilny == 7)
                { var staZw = -(szwd + (szwt * 7) + (szwm * 30.417) + (szwy * 365.3)) }
                else
                { var staZw = szwd + (szwt * 7) + (szwm * 30.417) + (szwy * 365.3) };
                data.append('staż związku', Math.round(staZw));
        const szad = Number(data.get('zaDni'));
        const szat = Number(data.get('zaTyg'));
        const szam = Number(data.get('zaMsc'));
        const szay = Number(data.get('zaRok'));
            if (zaw == 0)
                { var staZa = -(szad + (szat * 7) + (szam * 30.417) + (szay * 365.3)) }
                else
                { var staZa = szad + (szat * 7) + (szam * 30.417) + (szay * 365.3) };
                data.append('staż zatrudnienia', Math.round(staZa));
            
            if (zaw == 0)
                { data.set('stanPrac', '') & data.set('stanStud', '') & data.set('stypendium', '') }
                else if (zaw == 1)
                { data.set('stanStud', '') & data.set('stypendium', '') }
                else { data.set('stanPrac', '') };
// PIL

    // deklarowanie pozycji
        const pil1 = Number(data.get('pil1'));
        const pil2 = Number(data.get('pil2'));
        const pil3 = Number(data.get('pil3'));
        const pil4 = Number(data.get('pil4'));
        const pil5 = Number(data.get('pil5'));
        const pil6 = Number(data.get('pil6'));
        const pil7 = Number(data.get('pil7'));
        const pil8 = Number(data.get('pil8'));
        const pil9 = Number(data.get('pil9'));
        const pil10 = Number(data.get('pil10'));
        const pil11 = Number(data.get('pil11'));
        const pil12 = Number(data.get('pil12'));
        const pil13 = Number(data.get('pil13'));
        const pil14 = Number(data.get('pil14'));
        const pil15 = Number(data.get('pil15'));
        const pil16 = Number(data.get('pil16'));
        const pil17 = Number(data.get('pil17'));
        const pil18 = Number(data.get('pil18'));
        const pil19 = Number(data.get('pil19'));
        const pil20 = Number(data.get('pil20'));

    // PIL – Afirmacja życia
        const life = pil2 + pil4 + pil5 + pil6 + pil8 + pil9 + pil10 + pil19;
    data.append('afirmacja', life);

    // PIL – Akceptacja siebie
        const self = pil1 + pil12 + pil13;
    data.append('akceptacja', self);

    // PIL – Świadomość celu
        const goal = pil3 + pil11 + pil20;
    data.append('cel', goal);

    // PIL – Poczucie wolności
        const free = pil14 + pil18;
    data.append('wolność', free);

    // PIL – Ocena przyszłości
        const future = pil7 + pil17;
    data.append('przyszłość', future);

    // PIL – Stosunek wobec śmierci
        const death = pil15 + pil16;
    data.append('śmierć', death);

    // PIL – Jednoczynnikowy
        const jedno = pil4 + pil5 + pil9 + pil12 + pil17 + pil20;
    data.append('jedno', jedno);

    // PIL – Suma
        const pilAll = [
            pil1, pil2, pil3, pil4, pil5, pil6, pil7, pil8, pil9, pil10,
            pil11, pil12, pil13, pil14, pil15, pil16, pil17, pil18, pil19, pil20
        ];
        const pilSuma = pilAll.reduce( (total, curr) => total + curr );
    data.append('pilSuma', pilSuma);



// SBS

    // deklarowanie i przeliczanie pozycji odwróconych
        const sbs1 = Number(data.get('sbs1'));
        const sbs2 = Number(data.get('sbs2'));
        const sbs3 = Number(data.get('sbs3'));
        const sbs4 = Number(data.get('sbs4'));
        const sbs5 = Number(data.get('sbs5'));
        const sbs6 = Number(data.get('sbs6'));
        const sbs7 = Number(data.get('sbs7'));
        const sbs8 = Number(data.get('sbs8'));
        const sbs9 = Number(data.get('sbs9'));
        const sbs10 = Number(data.get('sbs10'));
        const sbs11 = Number(data.get('sbs11'));
        const sbs12 = Number(data.get('sbs12'));
        const sbs13 = Number(data.get('sbs13'));
        const sbs14 = Number(data.get('sbs14'));
        const sbs15 = Number(data.get('sbs15'));
        const sbs16 = Number(data.get('sbs16'));
        const sbs17 = Number(data.get('sbs17'));
        const sbs18 = Number(data.get('sbs18'));
        const sbs19 = Number(data.get('sbs19'));
        const sbs20 = Number(data.get('sbs20'));
        const sbs21 = Number(data.get('sbs21'));
        const sbs22 = Number(data.get('sbs22'));
        const sbs23 = Number(data.get('sbs23'));
        const sbs24 = Number(data.get('sbs24'));
        const sbs25 = 5 - Number(data.get('sbs25-r'));
            data.append('sbs25', sbs25);
        const sbs26 = Number(data.get('sbs26'));
        const sbs27 = Number(data.get('sbs27'));
        const sbs28 = Number(data.get('sbs28'));
        const sbs29 = Number(data.get('sbs29'));
        const sbs30 = Number(data.get('sbs30'));
        const sbs31 = Number(data.get('sbs31'));

    // SBS – Samotność społeczna
        const ssp = sbs1 + sbs2 + sbs3 + sbs4 + sbs5 + sbs6 + sbs7 + sbs8 + sbs9 + sbs10;
    data.append('s_społeczna', ssp);

    // SBS – Samotność emocjonalna
        const sem = sbs11 + sbs12 + sbs13 + sbs14 + sbs15 + sbs16 + sbs17 + sbs18 + sbs19 + sbs20 + sbs21;
    data.append('s_emocjonalna', sem);

    // SBS – Samotność egzystencjalna
        const seg = sbs22 + sbs23 + sbs24 + sbs25 + sbs26 + sbs27 + sbs28 + sbs29 + sbs30 + sbs31;
    data.append('s_egzystencjalna', seg);

    // SBS – Suma
        const sbsAll = [
            sbs1, sbs2, sbs3, sbs4, sbs5, sbs6, sbs7, sbs8, sbs9, sbs10, sbs11,
            sbs12, sbs13, sbs14, sbs15, sbs16, sbs17, sbs18, sbs19, sbs20, sbs21,
            sbs22, sbs23, sbs24, sbs25, sbs26, sbs27, sbs28, sbs29, sbs30, sbs31
        ];
        const sbsSuma = sbsAll.reduce( (total, curr) => total + curr );
    data.append('sbsSuma', sbsSuma);



// DIDS

    // deklarowanie i przeliczanie pozycji odwróconych
        const dids1 = Number(data.get('dids1'));
        const dids2 = Number(data.get('dids2'));
        const dids3 = Number(data.get('dids3'));
        const dids4 = Number(data.get('dids4'));
        const dids5 = Number(data.get('dids5'));
        const dids6 = Number(data.get('dids6'));
        const dids7 = Number(data.get('dids7'));
        const dids8 = Number(data.get('dids8'));
        const dids9 = Number(data.get('dids9'));
        const dids10 = Number(data.get('dids10'));
        const dids11 = Number(data.get('dids11'));
        const dids12 = Number(data.get('dids12'));
        const dids13 = Number(data.get('dids13'));
        const dids14 = Number(data.get('dids14'));
        const dids15 = Number(data.get('dids15'));
        const dids16 = Number(data.get('dids16'));
        const dids17 = Number(data.get('dids17'));
        const dids18 = Number(data.get('dids18'));
        const dids19 = Number(data.get('dids19'));
        const dids20 = Number(data.get('dids20'));
        const dids21 = Number(data.get('dids21'));
        const dids22 = Number(data.get('dids22'));
        const dids23 = Number(data.get('dids23'));
        const dids24 = Number(data.get('dids24'));
        const dids25 = Number(data.get('dids25'));

    // DIDS – Podjęcie zobowiązania
        const dpz = dids1 + dids2 + dids3 + dids4 + dids5;
    data.append('dids_podjęcie', dpz);

    // DIDS – Eksploracja wszerz 6-10
        const dew = dids6 + dids7 + dids8 + dids9 + dids10;
    data.append('dids_wszerz', dew);

    // DIDS – Eksploracja ruminacyjna 11-15
        const der = dids11 + dids12 + dids13 + dids14 + dids15;
    data.append('dids_ruminacyjna', der);

    // DIDS – Identyfikacja ze zobowiązaniem 16-20
        const diz = dids16 + dids17 + dids18 + dids19 + dids20;
    data.append('dids_identyfikacja', diz);

    // DIDS – Eksploracja w głąb 21-25
        const deg = dids21 + dids22 + dids23 + dids24 + dids25;
    data.append('dids_wgłąb', deg);




    
function interpret() {

// FEEDBACK section

    feedback.innerHTML =
    'Twoje wyniki wskazują na to, że: <p>' +

    //ogólnie o sensie życia i samotności
    'Aktualnie charakteryzuje Cię <strong>' +
        (pilSuma >= 120 ? 'wysokie' : pilSuma < 75 ? 'niskie' : 'umiarkowane') + '</strong> poczucie <span class="underDot">sensu życia</span> oraz <strong>' +
        (sbsSuma > 92 ? 'wysoki' : sbsSuma < 62 ? 'niski' : 'umiarkowany') + '</strong> poziom <span class="underDot">samotności</span>.' +
    '</p> <p>' +

    // samotność – wszystkie trzy
            (ssp > 30 ? 'Wygląda na to, że nie satysfakcjonuje Cię Twoja aktualna sieć kontaktów, odczuwasz brak lub niedobór pozytywnych relacji i&nbsp;być może nawet odizolowanie od innych. '
            : ssp < 20 ? 'Wygląda na to, że satysfakcjonuje Cię Twoja aktualna sieć kontaktów i&nbsp;posiadasz pozytywne relacje z innymi. '
            : 'Wygląda na to, że Twoje uczucia są mieszane. Twoja aktualna sieć kontaktów nie do końca Cię satysfakcjonuje, ale ciężko też powiedzieć, że jest całkiem źle. ')
        +
            (sem > 31 ? 'Brakuje Ci ' + (ssp < 20 ? 'jednak relacji bliskich, bardziej emocjonalnych więzi' : 'relacji bliskich, więzi bardziej emocjonalnych') + ' i&nbsp;nosisz w&nbsp;sobie wrażenie, że być może nie jesteś wystarczająco wartościową osobą do takich relacji lub też inni tacy nie są. '
            : sem < 22 ? 'Nie brakuje Ci ' + (ssp > 30 ? 'mimo wszystko ' : ssp >= 20 && ssp <= 30 ? 'mimo wszystko ' : '') + 'więzi emocjonalnych i&nbsp;raczej widzisz siebie jako osobę, która na bliskie relacje zasługuje i/lub myślisz tak o&nbsp;tych, z&nbsp;którymi ' + (ssp < 20 ? 'te bliskie ' : '') + 'więzi posiadasz. '
            : 'Miewasz wątpliwości lub mieszane odczucia podczas oceniania siebie i/lub innych jako osoby wartościowe w&nbsp;kontekście bliższych, emocjonalnych więzi. ')
        +
            (seg >= 30 ? 'Doświadczasz samotności egzystencjalnej – uczucia braku sensu istnienia, braku wspólnoty i&nbsp;spójnych z&nbsp;innymi wartości.'
            : seg < 20 ? 'Zdajesz się ' + (sem < 22 ? 'też ' : sem >= 22 && sem <= 30 ? 'jednak ' : '') + 'dostrzegać sens egzystencji, istnienia ludzkości oraz spójne z&nbsp;innymi wartości, czując się częścią czegoś większego niż Ty ' + (plec == 1 ? 'sama' : plec == 2 ? 'sam' : 'sam/a') + '.'
            : 'Wątpliwie podchodzisz ' + (sem < 22 ? 'jednak ' : sem >= 22 && sem <= 30 ? 'też ' : '') + 'do ludzkiej egzystencji i&nbsp;nie do końca wiesz, czy czujesz się częścią jakiejś wspólnoty i&nbsp;czy masz z&nbsp;innymi spójne wartości.')
        +
    '</p> <hr> <p style="color: #666;">' +

    'Rozwijając swoją tożsamość przechodzimy przez <span class="underDot">4&nbsp;etapy</span>. W&nbsp;danym momencie możemy znajdować się w&nbsp;więcej niż jednym z&nbsp;nich, a&nbsp;w&nbsp;przeciągu całego życia w&nbsp;każdym znaleźć się więcej niż raz. </p>' +
    'Twoje wyniki świadczą o&nbsp;tym, że aktualnie: <ul>' +

    // tożsamość – formowanie i ewaluacja
    (dew > 17 || dpz > 17 || deg > 17 || diz > 17 || der > 16 ?
        (dew > 17 ? '<li> <span class="underDot">Eksplorujesz</span>, poznajesz różne dziedziny, style życia i&nbsp;zbierasz tym samym informacje o&nbsp;swoich możliwościach i&nbsp;alternatywnych/potencjalnych ścieżkach do obrania.' + (dew < 21 && dew > 17 ? ' <span style="color: #222; font-weight: bold;">***</span>' : '') + ' </li>' : '') +
        (dpz > 17 ? '<li> <span class="underDot">Dokonujesz wyboru</span>. Decydujesz się na określony kierunek działania i&nbsp;wcielanie w&nbsp;życie wyborów, które są z nim związane. Szczególnie w&nbsp;najważniejszych dla Ciebie sferach życia.' + (dpz < 21 && dpz > 17 ? ' <span style="color: #222; font-weight: bold;">***</span>' : '') + ' </li>' : '') +
        (deg > 17 ? '<li> <span class="underDot">Analizujesz i&nbsp;oceniasz</span> dokonane przez siebie wybory. Starasz się dowiedzieć i&nbsp;określić na ile zgodne są one z&nbsp;Twoimi wyobrażeniami, oczekiwaniami i&nbsp;możliwościami.' + (deg < 21 && deg > 17 ? ' <span style="color: #222; font-weight: bold;">***</span>' : '') + ' </li>' : '') +
        (diz > 17 ? '<li> <span class="underDot">Czujesz wewnętrzną zgodność</span> i bezpieczeństwo wynikające z przekonania o słuszności swoich wyborów.' + (diz < 21 && diz > 17 ? ' <span style="color: #222; font-weight: bold;">***</span>' : '') + '</li>' : '') +
        // ruminacja i zmieszanie
        (der > 16 ? '<li> <span class="underDot">Doświadczasz trudności</span> związanych z dokonaniem wyborów tożsamościowych. Prawdopodobnie jakieś obawy lub silna niepewność wstrzymują Cię przed pójściem dalej. </li>' : '') :
        '<li> Co rzadkie... <span class="underDot">znajdujesz się gdzieś pomiędzy tymi etapami</span>, jednak jesteś na dobrej drodze. Prawdopodobnie towarzyszy Ci niepewność i/lub mieszane uczucia czy myśli, które powstrzymują Cię przed pójściem dalej. </li>') +
    '</ul>' +
    (dew > 17 & dew < 21 || dpz > 17& dpz < 21 || deg > 17& deg < 21 || diz > 17& diz < 21 ? '<div class="starred">Gwiazdkami zaznaczone zostały etapy na których się znajdujesz, jednak bez pełni zaangażowania. <br> Możliwe, że dany etap dopiero się rozpoczął lub właśnie się kończy.</div>' : '') +

    // propozycja konsultacji
    (pilSuma < 70 || sbsSuma > 62 || ssp > 30 || sem > 31 || seg > 30 || der > 16 ?
    '<hr> <p>' +
        'Jeśli ' + (plec == 1 ? 'byłabyś na to gotowa' : plec == 2 ? 'byłbyś na to gotowy' : 'był(a)byś na to gotowa/y') +
        ', to warto porozmawiać ze specjalistą (np.&nbsp;psychologiem)&nbsp;o: </p> <ul>' +
        (pilSuma < 70 ? '<li><span class="underDot">niskim</span> poczuciu sensu życia</li>' : '') +
        (sbsSuma > 62 || ssp > 30 || sem > 31 || seg > 30 ? '<li><span class="underDot">podwyższonym</span> poczuciu samotności</li>' : '') +
        (der > 16 ? '<li><span class="underDot">trudnościach</span> w rozwoju tożsamości</li>' : '') +
        '</ul>' +
    '<p>' +
        'Jeśli nie ze specjalistą, to może chociaż z&nbsp;przyjacielem, opiekunem lub kimkolwiek innym, kto przychodzi Ci na myśl. ' +
        'Wszystko co wyświetliło Ci się powyżej w&nbsp;interpretacji może służyć za pomoc w&nbsp;rozpoczęciu rozmowy. <br><br>' +
    '</p> Dziękuję jeszcze raz za udział w&nbsp;badaniu i&nbsp;życzę Ci wszystkiego co najlepsze!&nbsp;:)' : '');
};





// sending data to Google Spreadsheet and the Summary
    submitButton.addEventListener("click", function() {
        const action = 'https://script.google.com/macros/s/AKfycbwlyAffFlOfn7cResi31AszsGxLtADjRzzh7EBQKVOgQjS-arxjCEIPCQlug_qJgoMh/exec';
        fetch(action, {
        method: 'POST',
        body: data,
        })

        sent = true;
        localStorage.setItem('sent', sent);
        console.log('Dane zostały wysłane!');

        interpret();
    });


// IF sent OR not
if (sent) {
    interpret();
    submitButton.remove();
    console.log('Ktoś już wziął udział i wysłał swoje dane!');
} else {
    console.log('Żadne dane nie zostały jeszcze wysłane...');
};
});