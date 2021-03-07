def on_button_pressed_a():
    global no1, no2
    if state == 0:
        no1 += 1
    else:
        no2 += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if True:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

state = 0
no1 = 0
no2 = 0
result = 0
state = 0

def on_forever():
    pass
basic.forever(on_forever)
