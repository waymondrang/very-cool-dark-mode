var darkmodestate = true;

var defaultstyle = document.createElement("style")
defaultstyle.innerHTML = `
#dark-mode-switch {
    position: fixed;
    right: 24px;
    bottom: 24px;
    border: .0625rem solid #373737;
    border-radius: 500px;
    background-color: #212121;
    color: #cecece;
    padding: 2px 8px;
    font-family: 'Roboto',Helvetica,Arial,sans-serif;
    z-index: 2500000000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
#dark-mode-switch:hover {
    background-color: #2a2a2a;
}
`

var style = document.createElement("style")
style.innerHTML = `
body, nav, .joJglb, .ETRkCe {
    color: #fff;
    background-color: #1b1b1b;
}
.lXuxY .u73Apc {
    border-color: #373737;
}
*, h2, a, p, .apFsO.onkcGd, .apFsO.onkcGd:visited, .K6Ovqd, .Evt7cb, .Evt7cb:visited, .WOPwXe, .ViCi4, .tLDEHd, .dDKhVc, .asQXV, .rpo4wf, .wZTANe .J1raN:hover, .EZrbnd, .IqJTee, .A6dC2c, .DShyMc-MTkwMDQyNzU2MzY0 .VBEdtc-Wvd9Cc:hover, .DShyMc-MTkwMDQyNzU2MzY0.MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTkwMDQyNzU2MzY0 .MymH0d:hover .VBEdtc-Wvd9Cc, .NjE5zd, .DShyMc-AaTFfe.VnOHwf-Tvm9db, .DShyMc-AaTFfe .VnOHwf-Tvm9db, .DShyMc-AaTFfe.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky.VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky .VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2 .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2 .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.CNpREd .VnOHwf-Tvm9db, .xSP5ic, .Rq5Gcb, .ksaOtd, .DShyMc-MTcwNjk5NzM4Mjkx.VnOHwf-Tvm9db, .DShyMc-MTcwNjk5NzM4Mjkx .VnOHwf-Tvm9db, .DShyMc-MTcwNjk5NzM4Mjkx.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4 .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4 .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5.VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5 .VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1.VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1 .VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0 .VBEdtc-Wvd9Cc:hover, .DShyMc-MTIzMjUzMzg1OTU0.MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTIzMjUzMzg1OTU0 .MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTIzMjUzMzg1OTU0.VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0 .VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0.CNpREd .VnOHwf-Tvm9db {
    color: #fff;
    box-shadow: none;
}
.Aopndd, .d4Fe0d, .GWZ7yf, .hgjBDc, .Xi8cpb:hover .LlcfK, .JPdR6b, .gHz6xd.rZXyy:not(.kKn9Nc):not(.u0dx8e):hover, .I7OXgf, .DShyMc-MTc0OTQxMzAwMzk3.bFjUmb-Ysl7Fe, .DShyMc-MTc0OTQxMzAwMzk3 .bFjUmb-Ysl7Fe, .DShyMc-MTM5ODA0NDQ5MjUz.bFjUmb-Ysl7Fe, .DShyMc-MTM5ODA0NDQ5MjUz .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1.bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf .idtp4e {
    background-color: #212121;
    border: .0625rem solid #373737;
    box-shadow: none;
}
.MHxtic:hover, .ncFHed, .EHzcec, .MHxtic.ndcsBf, .ybOdnf.iWO5td, .uQ3ESd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover.j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover .j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover.j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover .j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover .idtp4e {
    /* to do assignments */
    background: none;
    background-color: #212121;
    box-shadow: none;
}
.DShyMc-MTg0MjQ2MDIxMDky.bFjUmb-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .bFjUmb-Ysl7Fe {
    background-color: #212121;
}
.oBSRLe, .Lzdwhd-BrZSOd, .lziZub, .lziZub:visited {
    color: #8d8d8d;
}
.s2g3Xd, .PeGHgb.Q8U8uc .Ono85c+.oh9CFb, .PeGHgb.Q8U8uc .ruTJle+.fETHd, .ar1wE .eqqrO, .ySjuvd .eqqrO, .E5f6Vd, .ZNE4y, .ycbm1d, .LKqFXc, .P02DYb, .tUJKGd:not(:first-child), .O9YpHb {
    border-top: .0625rem solid #373737;
}
.joJglb, .u73Apc, .MHxtic:not(:last-child) {
    border-bottom: .0625rem solid #373737;
}
.oleV8d, .DShyMc-MTkwMDQyNzU2MzY0 .AeAAkf:not(.RDPZE):hover, .DShyMc-MTkwMDQyNzU2MzY0 .AeAAkf:not(.RDPZE).u3bW4e, .DShyMc-MTkwMDQyNzU2MzY0 .BEAGS:not(.RDPZE):hover, .DShyMc-MTkwMDQyNzU2MzY0 .BEAGS:not(.RDPZE).u3bW4e, .BEAGS:hover, .BEAGS, .Xp0OCe, .QTD2uf {
    border: .0625rem solid #373737;
}
.BOW64 {
    border-right: .0625rem solid #373737;
}
.SZ0kZe, .WMQb5e .oBSRLe, .MHxtic.ndcsBf, .d4Fe0d.s3BYNe {
    border: none;
}
.rZXyy.YwNp1, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):hover, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):focus, .MHxtic.ndcsBf {
    box-shadow: none;
}
.gHz6xd {
    margin: .0625rem 1.5625rem 1.5625rem .0625rem;
}
.DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover.j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover.idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover .j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover.j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover .j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover .idtp4e, .z80M1.FwR7Pc, .DShyMc-MTg0MTM1MDc2OTI0.bFjUmb-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .bFjUmb-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .QkA63b:not(.RDPZE), .DShyMc-MTkwMDQyNzU2MzY0 .Y5sE8d:not(.RDPZE), .ncFHed .MocG8c.KKjvXb, .DShyMc-AaTFfe .bFjUmb-Wvd9Cc.kRqvHe, .ry3kXd .MocG8c.KKjvXb, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover.j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover .j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover.j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover.idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover .j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover .idtp4e {
    background-color: #424242;
}
.fWf7qe .Yalane, .hqfVKd, .fWf7qe:not(.RDPZE):hover .Yalane, textarea, .DShyMc-AaTFfe .UISY8d-Ysl7Fe:hover, .DShyMc-AaTFfe.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .UISY8d-Ysl7Fe:hover, .DShyMc-AaTFfe.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .UISY8d-Ysl7Fe:hover, .DShyMc-MTg0MjQ2MDIxMDky.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg5OTc2MTkwMTI2.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg5OTc2MTkwMTI2.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg0MTM1MDc2OTI0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe.bFjUmb-Ysl7Fe, .DShyMc-AaTFfe .bFjUmb-Ysl7Fe, .DShyMc-AaTFfe .bFjUmb-Ysl7Fe.kRqvHe, .DShyMc-AaTFfe.bFjUmb-Wvd9Cc, .DShyMc-AaTFfe .bFjUmb-Wvd9Cc, .DShyMc-AaTFfe.CNpREd.bFjUmb-Wvd9Cc, .DShyMc-AaTFfe.CNpREd .bFjUmb-Wvd9Cc, .DShyMc-MTkwMDQyNzU2MzY0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTkwMDQyNzU2MzY0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0.bFjUmb-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .bFjUmb-Ysl7Fe, .IzVHde, .DShyMc-MTkwMTE1MjU3MTA0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTkwMTE1MjU3MTA0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover.j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover.idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover .j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover .idtp4e, .DShyMc-MTkwMTE1MjU3MTA0.bFjUmb-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .bFjUmb-Ysl7Fe, .DShyMc-MTcwNjk5NzM4Mjkx .UISY8d-Ysl7Fe:hover, .DShyMc-MTcwNjk5NzM4Mjkx.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTcwNjk5NzM4Mjkx .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4.bFjUmb-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .bFjUmb-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .UISY8d-Ysl7Fe:hover, .DShyMc-MTYxNDkyMTI1MTg4.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzNjUwOTUwMjY5.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5.bFjUmb-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzMDAxMzIxMDE1.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .P3W0Dd-Ysl7Fe:focus, .DShyMc-MTg0MTM1MDc2OTI0.maXJsd:focus .P3W0Dd-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .maXJsd:focus .P3W0Dd-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2.bFjUmb-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0.bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzMjUzMzg1OTU0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .MymH0d:hover .UISY8d-Ysl7Fe, .d4Fe0d.s3BYNe {
    background-color: transparent;
}
.DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:hover, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:hover *, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:focus, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:focus *, .DShyMc-MTkwMDQyNzU2MzY0.VnOHwf-Tvm9db, .DShyMc-MTkwMDQyNzU2MzY0 .VnOHwf-Tvm9db, .DShyMc-MTkwMDQyNzU2MzY0.CNpREd .VnOHwf-Tvm9db {
    color: inherit;
}
.vzcr8, .EhRlC {
    color: #f48fb1;
    /* nice green */
}
.lYU7F {
    /* nice red */
    color: #f44336;
}
.hVNH5c, .ncFHed, .EHzcec, .joJglb.kLHn3 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.Xp0OCe {
    border-radius: 0.25rem;
}
.udxSmc, .xSP5ic {
    color: #ffffff5a;
}
.neggzd {
    color: #ffffff1a;
}
.DShyMc-MTg0MjQ2MDIxMDky .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTg0MjQ2MDIxMDky .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTg0MjQ2MDIxMDky .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"], .DShyMc-MTkwMTE1MjU3MTA0 .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTkwMTE1MjU3MTA0 .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTkwMTE1MjU3MTA0 .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"], .DShyMc-MTkwMDQyNzU2MzY0 .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTkwMDQyNzU2MzY0 .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTkwMDQyNzU2MzY0 .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"] {
    background-color: #4242425a;
}
`
style.id = "dark-mode-style";

var button = document.createElement("button");
button.id = "dark-mode-switch";
button.innerHTML = "toggle light mode 🌞"
button.onclick = function () {
    if (darkmodestate) {
        document.querySelector("#dark-mode-style").remove()
        document.querySelector("#dark-mode-switch").innerHTML = "toggle dark mode 🌚"
        darkmodestate = false
        chrome.storage.local.set({ darkmode: false })
    } else {
        document.body.insertBefore(style, document.body.lastChild)
        document.querySelector("#dark-mode-switch").innerHTML = "toggle light mode 🌞"
        darkmodestate = true
        chrome.storage.local.set({ darkmode: true })
    }
}

chrome.storage.local.get(["darkmode"], function (result) {
    if (!result.darkmode) {
        darkmodestate = false;
        button.innerHTML = "toggle dark mode 🌚"
    } else {
        document.body.insertBefore(style, document.body.lastChild)
    }
})

document.body.insertBefore(defaultstyle, document.body.lastChild)
document.body.insertBefore(button, document.body.firstChild)

var observer = new MutationObserver(function (mutations, me) {
    var div = document.querySelector("#yDmH0d > div.JPdR6b.hVNH5c.qjTEB > div > div");
    if (div) {
        var span = document.createElement("span")
        span.className = "z80M1 FeRvI FwR7Pc";
        span.innerHTML = `
        <div class="aBBjbd MbhUzd" jsname="ksKsZd" style="top: 21px; left: 64px; width: 239px; height: 239px;"></div><div class="uyYuVb oJeWuf"><div class="jO7h3c">Dark Mode Settings ⚙️</div></div>
        `;
        div.insertBefore(span, div.lastChild)
        me.disconnect(); //STOP OBSERVING
        return;
    }
});

//START OBSERVING
observer.observe(document, {
    childList: true,
    subtree: true
});