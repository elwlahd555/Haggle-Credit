package com.egemmerce.hc.auction.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.AuctionParticipant;
import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.mapper.AuctionParticipantRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuctionParticipantServiceImpl implements AuctionParticipantService {

	private final AuctionParticipantRepository auctionParticipantRepository;

	@Override
	public void insert(AuctionParticipant auctionParticipant) {
		auctionParticipantRepository.save(auctionParticipant);

	}

	@Override
	public List<AuctionParticipant> findByapItemNo(int apItemNo) {
		return auctionParticipantRepository.findByapItemNo(apItemNo);
	}

	@Override
	public AuctionParticipant selectBeforeAP(int isItemNo) {
		return auctionParticipantRepository.findByapItemNoOrderByApDateDesc(isItemNo);
	}

}
