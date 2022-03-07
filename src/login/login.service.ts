import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { Login } from "src/login.interface";

@Injectable()
export class LoginService {
    private readonly result: Omit<Login["Result"], "CreateTime"> = {
        WID: 1,
        NickName: "Dreamer",
        AccountLevel: 999,
        AccountExp: 1,
        LoginCount: 1,
        LastLoginTime: 0,
        AccessToken: "LoGateAccessToken",
        MasterPCID: 1,
        IsChangeNickName: 1,
        ProfileText: "紹介文を入力してください ",
        MasterSquadIndex: 1,
        LastGiveCurrencyTime: 0,
        LastStage: "Ch04Stage07",
        AcceptTerms: 0,
    };
    private readonly login: Omit<Login, "Sequence" | "Result" | "ServerTime"> =
        {
            ErrorCode: 0,
            ChatServerIP: "",
            ChatServerPort: "0",
            IsMasterPCGiveToFavorPoint: 0,
            TutorialSqIndex: 2000,
            BlockType: 0,
            IsLeave: 0,
            IsBlock: 0,
            BlockReason: "",
            BlockStartTime: 0,
            BlockEndTime: 0,
            GNID: "1637755171092020187",
            IsNew: 0,
            PresetSlotCount: 10,
            PresetIndex: 0,
            PresetInfoList: [
                {
                    PresetIndex: 1,
                    PresetName: "基本背景プリセット1",
                    PresetPCInfoList: [
                        {
                            PCID: 0,
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                            PartsOn: 0,
                            Damaged: 0,
                            FaceType: 0,
                        },
                        {
                            PCID: 0,
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                            PartsOn: 0,
                            Damaged: 0,
                            FaceType: 0,
                        },
                        {
                            PCID: 0,
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                            PartsOn: 0,
                            Damaged: 0,
                            FaceType: 0,
                        },
                    ],
                    PresetStickerInfoList: [
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                        {
                            StickerKey: "",
                            PositionX: 0,
                            PositionY: 0,
                            ScaleX: 1,
                            ScaleY: 1,
                            RotationY: 0,
                            RotationZ: 0,
                            SortingOrder: 0,
                        },
                    ],
                    BGKeyString: "LobbyBG_Beach",
                },
            ],
            BGKeyList: ["LobbyBG_Beach", "LobbyBG_OrcaMain"],
            BoostInfoList: null,
        };

    getLogin(reqest: Request): Login {
        const now = Math.trunc(new Date().getTime() / 1000);
        return {
            ...this.login,
            Result: {
                ...this.result,
                CreateTime: now,
            },
            ServerTime: now,
            Sequence: reqest.body.Sequence + 1,
        };
    }
}
