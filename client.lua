local identifier = "svelte-ts-template"

CreateThread(function ()
    while GetResourceState("lb-phone") ~= "started" do
        Wait(500)
    end

    local function AddApp()
        local added, errorMessage = exports["lb-phone"]:AddCustomApp({
            identifier = identifier,
            name = "Svelte App",
            description = "Template app using svelte + daisyUI",
            developer = "eeharumt",
            defaultApp = false, -- OPTIONAL if set to true, app should be added without having to download it,
            size = 59812, -- OPTIONAL in kb
            price = 0, -- OPTIONAL, Make players pay with in-game money to download the app
            -- images = {"https://example.com/photo.jpg"}, -- OPTIONAL array of images for the app on the app store

            ui = GetCurrentResourceName() .. "/ui/dist/index.html", -- built version
            -- ui = "http://localhost:3000", -- dev version

            icon = "https://cfx-nui-" .. GetCurrentResourceName() .. "/ui/dist/favicon.png"
        })

        if not added then
            print("Could not add app:", errorMessage)
        end
    end

    AddApp()

    AddEventHandler("onResourceStart", function(resource)
        if resource == "lb-phone" then
            AddApp()
        end
    end)

    local directions = {"N", "NE", "E", "SE", "S", "SW", "W", "NW"}
    local oldYaw, oldDirection

    RegisterNUICallback("getDirection", function(data, cb)
        cb(oldDirection)
    end)

    while true do
        Wait(25)

        local yaw = math.floor(360.0 - ((GetFinalRenderedCamRot(0).z + 360.0) % 360.0) + 0.5)
        if yaw == 360 then
            yaw = 0
        end

        -- get closest direction
        if oldYaw ~= yaw then
            oldYaw = yaw
            oldDirection = yaw .. "° " .. directions[math.floor((yaw + 22.5) / 45.0) % 8 + 1]
            exports["lb-phone"]:SendCustomAppMessage(identifier, {
                type = "updateDirection",
                direction = oldDirection
            })
        end
    end
end)

RegisterNUICallback("drawNotification", function(data, cb)
    BeginTextCommandThefeedPost("STRING")
    AddTextComponentSubstringPlayerName(data.message)
    EndTextCommandThefeedPostTicker(false, false)

    cb("ok")
end)
