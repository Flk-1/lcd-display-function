function lcd_display (text: string) {
    I2C_LCD1602.ShowString(text, 0, 0)
}
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.clear()
basic.forever(function () {
    lcd_display("abc1")
})
