import React from 'react'
import mic from '../../../assets/mic.svg';
import user from '../../../assets/usercircle.svg';
import message from '../../../assets/message.svg';
function Friends_Data() {
    const friends =
        [
            {
                id: 1,
                image: mic,
                name: "Daphne",
                email: "@msmoon",
            },
            {
                id: 2,
                image: mic,
                name: "Niles",
                email: "@jungcrane",
            },
            {
                id: 3,
                image: mic,
                name: "Martin",
                email: "@ballentines",
            },
            {
                id: 4,
                image: mic,
                name: "Dan",
                email: "@bulldog",
            },
            {
                id: 5,
                image: mic,
                name: "Frasier",
                email: "@imlistening",
            },
            {
                id: 6,
                image: mic,
                name: "Roz",
                email: "@doylerules",
            },

        ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-[27px] gap-y-[29px]">
            {
                friends.map((friend) => (
                    <div className="bg-[#0D2539] w-full h-[404px] flex flex-col justify-center items-center" key={friend.id}>
                        <div className="w-[100px] h-[100px] md:w-[156px] md:h-[156px]">
                            <img src={mic} alt="" className="w-full h-full" />
                        </div>
                        <div className="font-normal opacity-100 text-white text-center">
                            <p className="text-[35px] leading-[63px] font-palanquin-dark">{friend.name}</p>
                            <p className="italic font-normal text-[20px] leading-[25px] font-mulish">{friend.email}</p>
                        </div>
                        <div className="flex gap-[30px] pt-[35px]">
                            <div className="w-[35px] h-[35px]">
                                <img src={user} alt="" className="w-full h-full" />
                            </div>
                            <div className="w-[35px] h-[35px]">
                                <img src={message} alt="" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Friends_Data;