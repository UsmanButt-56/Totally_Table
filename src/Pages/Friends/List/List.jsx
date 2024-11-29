import React from 'react'
import mic from '../../../assets/mic.svg';
import user from '../../../assets/usercircle.svg';
import message from '../../../assets/message.svg';
function List() {
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
        <div className="flex flex-col gap-y-4">
            {
                friends.map((friend) => (
                    <div
                        key={friend.id}
                        className="w-full h-full md:h-[150px] bg-[#0D2539] flex flex-row justify-between items-center md:px-[42px] px-[10px] py-2 md:py-0 gap-y-[20px]"
                    >
                        <div>
                            <div className="flex items-center gap-x-[10px] sm:gap-x-[41px]">
                                <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[106px] md:h-[106px]">
                                    <img src={friend.image} alt={friend.name} className="w-full h-full" />
                                </div>
                                <div className="flex flex-col text-white opacity-100">
                                    <p className="text-[16px] sm:text-[20px] md:text-[30px] md:leading-[33px] font-palanquin-dark">
                                        {friend.name}
                                    </p>
                                    <p className="text-[12px] sm:text-[16px] md:text-[24px] md:leading-[30px] font-mulish">
                                        {friend.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-[10px] sm:gap-x-[30px]">
                            <div className="w-[20px] sm:w-[35px] h-[20px] sm:h-[35px]">
                                <img src={user} alt="user-icon" className="w-full h-full" />
                            </div>
                            <div className="w-[20px] sm:w-[35px] h-[20px] sm:h-[35px]">
                                <img src={message} alt="message-icon" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default List;