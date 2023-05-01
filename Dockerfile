FROM kasmweb/core-ubuntu-focal:1.13.0
USER root

ENV HOME /home/kasm-default-profile
ENV STARTUPDIR /dockerstartup
ENV INST_SCRIPTS $STARTUPDIR/install
WORKDIR $HOME

######### Customize Container Here ###########


RUN wget https://repo.protonvpn.com/debian/dists/stable/main/binary-all/protonvpn-stable-release_1.0.3_all.deb \
&& apt-get install -y protonvpn-stable-release_1.0.3_all.deb \
&& apt-get update \
&& apt-get install protonvpn \
&& cp /usr/share/applications/protonvpn.desktop $HOME/Desktop/ \
&& chown 1000:1000 $HOME/Desktop/protonvpn.desktop

######### End Customizations ###########

RUN chown 1000:0 $HOME
RUN $STARTUPDIR/set_user_permission.sh $HOME

ENV HOME /home/kasm-user
WORKDIR $HOME
RUN mkdir -p $HOME && chown -R 1000:0 $HOME

USER 1000


