const payload = `
<script>alert(1)</script>
`
function mal() {
    document.write(payload);
}

mal();
