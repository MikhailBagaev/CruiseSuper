$(function(){var e=$(".jcarousel");e.on("jcarousel:create jcarousel:reload",function(){carousel=$(this),width=carousel.innerWidth(),width>900?width/=7:width>700?width/=5:width>500?width/=3:width/=2,carousel.jcarousel("items").css("width",Math.ceil(width)+"px")}).jcarousel({wrap:"circular",animation:{duration:300,easing:"swing",complete:function(){}}}),$(".jcarousel-prev").jcarouselControl({target:"-=1"}),$(".jcarousel-next").jcarouselControl({target:"+=1"})}),$(function(){var e=$(".jcarousel1");e.on("jcarousel:create jcarousel:reload",function(){carousel=$(this),width=carousel.innerWidth(),width>900?width/=3:width>600?width/=2:width/=1,carousel.jcarousel("items").css("width",Math.ceil(width)+"px")}).jcarousel({wrap:"circular",animation:{duration:300,easing:"swing",complete:function(){}}}),$(".jcarousel1-prev").jcarouselControl({target:"-=1"}),$(".jcarousel1-next").jcarouselControl({target:"+=1"})}),$(function(){$(window).scroll(function(){$(this).innerWidth()>767?$(this).scrollTop()>164?$("#menu").addClass("fixed"):$(this).scrollTop()<216&&$("#menu").removeClass("fixed"):$(this).scrollTop()>344?$("#menu").addClass("fixed"):$(this).scrollTop()<396&&$("#menu").removeClass("fixed")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImpjYXJvdXNlbCIsIm9uIiwiY2Fyb3VzZWwiLCJ0aGlzIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY3NzIiwiTWF0aCIsImNlaWwiLCJ3cmFwIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJlYXNpbmciLCJjb21wbGV0ZSIsImpjYXJvdXNlbENvbnRyb2wiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRSxXQUNFLEdBQUlDLEdBQVlELEVBQUUsYUFDbEJDLEdBQ0tDLEdBQUcsb0NBQXFDLFdBRXJDQyxTQUFXSCxFQUFFSSxNQUNiQyxNQUFRRixTQUFTRyxhQUViRCxNQUFRLElBQ1JBLE9BQWdCLEVBQ1RBLE1BQVEsSUFDZkEsT0FBZ0IsRUFDVEEsTUFBUSxJQUNmQSxPQUFnQixFQUVuQkEsT0FBZSxFQUVoQkYsU0FBU0YsVUFBVSxTQUFTTSxJQUFJLFFBQVNDLEtBQUtDLEtBQUtKLE9BQVMsUUFFL0RKLFdBQ0dTLEtBQU0sV0FDTkMsV0FDSEMsU0FBVSxJQUNWQyxPQUFVLFFBQ1ZDLFNBQVUsZ0JBSVhkLEVBQUUsbUJBQW1CZSxrQkFDakJDLE9BQVEsUUFHWmhCLEVBQUUsbUJBQW1CZSxrQkFDakJDLE9BQVEsVUFJcEJoQixFQUFFLFdBQ0UsR0FBSUMsR0FBWUQsRUFBRSxjQUNsQkMsR0FDS0MsR0FBRyxvQ0FBcUMsV0FFckNDLFNBQVdILEVBQUVJLE1BQ2JDLE1BQVFGLFNBQVNHLGFBRWJELE1BQVEsSUFDUkEsT0FBZ0IsRUFDVEEsTUFBUSxJQUNmQSxPQUFnQixFQUVuQkEsT0FBZSxFQUVoQkYsU0FBU0YsVUFBVSxTQUFTTSxJQUFJLFFBQVNDLEtBQUtDLEtBQUtKLE9BQVMsUUFFL0RKLFdBQ0dTLEtBQU0sV0FDTkMsV0FDSEMsU0FBVSxJQUNWQyxPQUFVLFFBQ1ZDLFNBQVUsZ0JBSVhkLEVBQUUsb0JBQW9CZSxrQkFDbEJDLE9BQVEsUUFHWmhCLEVBQUUsb0JBQW9CZSxrQkFDbEJDLE9BQVEsVUFNcEJoQixFQUFFLFdBQ0VBLEVBQUVpQixRQUFRQyxPQUFPLFdBRVRsQixFQUFFSSxNQUFNRSxhQUFlLElBRXBCTixFQUFFSSxNQUFNZSxZQUFjLElBQ3JCbkIsRUFBRSxTQUFTb0IsU0FBUyxTQUVmcEIsRUFBRUksTUFBTWUsWUFBYyxLQUMzQm5CLEVBQUUsU0FBU3FCLFlBQVksU0FLeEJyQixFQUFFSSxNQUFNZSxZQUFjLElBQ3JCbkIsRUFBRSxTQUFTb0IsU0FBUyxTQUVmcEIsRUFBRUksTUFBTWUsWUFBYyxLQUMzQm5CLEVBQUUsU0FBU3FCLFlBQVkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgamNhcm91c2VsID0gJCgnLmpjYXJvdXNlbCcpO1xyXG4gICAgamNhcm91c2VsXHJcbiAgICAgICAgLm9uKCdqY2Fyb3VzZWw6Y3JlYXRlIGpjYXJvdXNlbDpyZWxvYWQnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNhcm91c2VsID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgd2lkdGggPSBjYXJvdXNlbC5pbm5lcldpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAod2lkdGggPiA5MDApIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gd2lkdGggLyA3O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoID4gNzAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHdpZHRoIC8gNTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggPSB3aWR0aCAvIDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFx0d2lkdGggPSB3aWR0aCAvMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuamNhcm91c2VsKCdpdGVtcycpLmNzcygnd2lkdGgnLCBNYXRoLmNlaWwod2lkdGgpICsgJ3B4Jyk7XHJcbiAgICAgICAgfSkgICAgICAgICAgXHJcbiAgICAgICAgLmpjYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIHdyYXA6ICdjaXJjdWxhcicsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjoge1xyXG5cdCAgICAgICAgZHVyYXRpb246IDMwMCxcclxuXHQgICAgICAgIGVhc2luZzogICAnc3dpbmcnLFxyXG5cdCAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICBcclxuICAgICAgICAkKCcuamNhcm91c2VsLXByZXYnKS5qY2Fyb3VzZWxDb250cm9sKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiAnLT0xJyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgIFx0XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmpjYXJvdXNlbC1uZXh0JykuamNhcm91c2VsQ29udHJvbCh7XHJcbiAgICAgICAgICAgIHRhcmdldDogJys9MSdcclxuICAgICAgICB9KTsgICAgICAgICBcclxuIH0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIHZhciBqY2Fyb3VzZWwgPSAkKCcuamNhcm91c2VsMScpO1xyXG4gICAgamNhcm91c2VsXHJcbiAgICAgICAgLm9uKCdqY2Fyb3VzZWw6Y3JlYXRlIGpjYXJvdXNlbDpyZWxvYWQnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNhcm91c2VsID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgd2lkdGggPSBjYXJvdXNlbC5pbm5lcldpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAod2lkdGggPiA5MDApIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gd2lkdGggLyAzO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoID4gNjAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHdpZHRoIC8gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHR3aWR0aCA9IHdpZHRoIC8xO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXJvdXNlbC5qY2Fyb3VzZWwoJ2l0ZW1zJykuY3NzKCd3aWR0aCcsIE1hdGguY2VpbCh3aWR0aCkgKyAncHgnKTtcclxuICAgICAgICB9KSAgICAgICAgICBcclxuICAgICAgICAuamNhcm91c2VsKHtcclxuICAgICAgICAgICAgd3JhcDogJ2NpcmN1bGFyJyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiB7XHJcblx0ICAgICAgICBkdXJhdGlvbjogMzAwLFxyXG5cdCAgICAgICAgZWFzaW5nOiAgICdzd2luZycsXHJcblx0ICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgICQoJy5qY2Fyb3VzZWwxLXByZXYnKS5qY2Fyb3VzZWxDb250cm9sKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiAnLT0xJyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgIFx0XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmpjYXJvdXNlbDEtbmV4dCcpLmpjYXJvdXNlbENvbnRyb2woe1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICcrPTEnXHJcbiAgICAgICAgfSk7ICAgICAgICAgXHJcbiB9KTtcclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLmlubmVyV2lkdGgoKSA+IDc2Nykge1xyXG5cclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDE2NCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI21lbnUnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgMjE2KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbWVudScpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzQ0KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbWVudScpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCAzOTYpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtZW51JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdfQ==
